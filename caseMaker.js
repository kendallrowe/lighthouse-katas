const camelCase = function(input) {
  let finalString = "";
  const whiteSpace = " ";
  let capitalize = false;
  let letterString = "";

  // Check that string has been passed as argument
  if (typeof (input) === "string") {
    // Iterate through length of string
    for (let j = 0; j < input.length; j++) {
      letterString = input.charAt(j);
      // If character at index is whitespace (" "), do not include in string and 
      // set boolean to make next valid character uppercase when printed
      if (letterString === whiteSpace) {
        capitalize = true;
      } else {
        if (capitalize === true) {
          // Print the next valid letter following a white space as uppercase and reset boolean
          finalString += letterString.toUpperCase();
          capitalize = false;
        } else {
          finalString += letterString;
        }
      }
    }
  } else {
    finalString = "Please make sure to enter a string";
  }

  return finalString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
