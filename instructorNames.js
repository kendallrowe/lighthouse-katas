const instructorWithLongestName = function(instructors) {
  let longestNameIndex = -1;
  let longestNameLength = -1;

  instructors.forEach(function(instructor,index) {
    if (instructor.name.length > longestNameLength) {
      longestNameLength = instructor.name.length;
      longestNameIndex = index;
    }
  });

  return instructors[longestNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));