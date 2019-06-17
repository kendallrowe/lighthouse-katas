const talkingCalendar = function(date) {
  const yearStr = date.substring(0, 4);
  const monthNum = parseInt(date.substring(5,7)) - 1;
  let dayName = date.substring(8,10);
  const dayNum = parseInt(dayName);

  // Determine ordinal to be used for day string ie. "st", "th", etc.
  const ordName = ordString(dayName, dayNum);
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Remove leading zero from number if less than ten 
  if (dayNum < 10) {
    dayName = dayName.substring(1);
  }
  dayName += ordName;
  
  return monthNames[monthNum] + " " + dayName + ", " + yearStr

};

const ordString = function(dayName, dayNum) {
  let ordinalName;
  
  // Logic to append correct ordinal based on date number
  if (dayNum < 20 && dayNum > 10) {
    ordinalName = "th";
  } else if (dayName.substring(1, 2) === "1") {
    ordinalName = "st";
  } else if (dayName.substring(1, 2) === "2") {
    ordinalName = "nd";
  } else if (dayName.substring(1, 2) === "3") {
    ordinalName = "rd";
  } else {
    ordinalName = "th";
  }

  return ordinalName;
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
