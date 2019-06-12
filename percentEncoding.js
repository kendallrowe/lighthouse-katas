const urlEncode = function(text) {
  let finalString = "";
  const whiteSpace = " ";

  // Check that string has been passed as argument
  if (typeof (text) === "string") {
    // Iterate through length of string
    for (let j = 0; j < text.length; j++) {
      // If character at index is whitespace (" "), replace with %20, else store character as it appears into finalstring
      if (text.charAt(j) === whiteSpace) {
        finalString += "%20";
      } else {
        finalString += text.charAt(j);
      }
      
    }
  } else {
    finalString = "Please make sure to enter a string";
  }

  return finalString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));