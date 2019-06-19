const squareCode = function(message) {
  let spacesRemovedString = "";
  let encodedString = "";
  let squareString = [];
  let squareStringLine = "";
  let stringLineIndex = 0;
  let lettersPerLine = 0;

  // Initially step through string and remove all spaces to create a shortened string
  for (let i = 0; i < message.length; i++) {
    if (message.charAt(i) !== " ") {
      spacesRemovedString += message.charAt(i);
    }
  }

  // Formula to calculate the number of letters per line based on square root of string after removing spaces
  lettersPerLine = Math.ceil(Math.sqrt(spacesRemovedString.length));

  // Loop to create square shape of string
  for (let j = 0; j < spacesRemovedString.length; j++) {
    // When end of line is reached, log the line into square array and move to next line
    if (j!== 0 && j % (lettersPerLine) === 0) {
      squareString[stringLineIndex] = squareStringLine;
      squareStringLine = "";
      stringLineIndex++;
    } 
    squareStringLine += spacesRemovedString.charAt(j);
    // If the end of the string has been reached, log the last line into square array
    if (j === (spacesRemovedString.length - 1)) {
      squareString[stringLineIndex] = squareStringLine;
    }
  }

  // Loop through the square array reading by column from left to right to create the encoded string
  for (let columnIndex = 0; columnIndex < lettersPerLine; columnIndex++){
    squareString.forEach(function(squareRow){
      if (squareRow[columnIndex] !== undefined) {
        encodedString += squareRow[columnIndex];
      }
    });
    encodedString += " ";
  }

  return encodedString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));