let spaceFoundCapitalize = false;

const makeCase = function(input, caseType) {
  let finalString = "";
  let letterString = "";
  const casePrecedence = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];
  let caseArray = [];
  let firstLetter = true;

  // Check whether multiple cases have been passed in an array or just one
  if (Array.isArray(caseType) === true) {
    // If an array of cases were passed, sort them for precedence to process 
    casePrecedence.forEach(function(currentPrecedent) {
      caseType.forEach(function(currentCase) {
        if(currentPrecedent === currentCase) {
          caseArray.push(currentCase);
        }
      });
    });
  } else {
    caseArray = [caseType];
  }
  
  // Iterate through each letter for length of string
  for (let j = 0; j < input.length; j++) {
    letterString = input.charAt(j);
    // Apply all casing rules in precedence sequence for the given letter index of string
    caseArray.forEach(function(currentCase, casingIndex) {
      // If pascal or title case and current character of string is the first letter, apply uppercase
      if ((currentCase === "pascal" || currentCase === "title") && strIsLetter(letterString) === true && firstLetter === true) {
        letterString = letterString.toUpperCase();
        firstLetter = false;
      }
      // For the first casing style applied (casingIndex = 0), if character of string is punctuation, remove by replacing with ""
      if (casingIndex === 0 && letterString !== " " && strIsLetter(letterString) === false) {
        letterString = "";
      }
      // Apply casing style to character
      letterString = caseFunctions[currentCase](letterString);
    });
    finalString += letterString
  }
  
  return finalString;
}

// Function applying logic to check whether a given string character is whitespace and whether it needs to be capitalized,
// applying relevant casing style logic as needed
const replaceSpaceCapitalize = function(changeString, replacementChar, capitalize, lowerCase, casingStyle) {
  // If character at index is whitespace (" "), check for case type and treat accordingly
  if (changeString === " ") {
    // If casetype is camel, pascal, or title, set global boolean to capitalize the next letter
    if (casingStyle === "camel" || casingStyle === "pascal" || casingStyle === "title") {
      spaceFoundCapitalize = true;
    }
    return replacementChar;
  } else {
    // If casing style is consonant or vowel, check if the letter is a relevant type and set capitalize boolean accordingly
    if ((casingStyle === "vowel" && isVowel(changeString) === true) || (casingStyle === "consonant" && isVowel(changeString) === false)) {
      capitalize = true;
    }
    // If character at index is not whitespace, check whether a lowercase or capitalize is required, else return character as it is
    if (capitalize === true) {
      // If capitalizing a letter in camel, pascal or title, reset global boolean
      spaceFoundCapitalize = false;
      return changeString.toUpperCase();
    } else if (lowerCase === true) {
      return changeString.toLowerCase();      
    } else {
      return changeString;
    }
  }
}

// Function to check letters and numbers from https://www.w3resource.com/javascript/form/letters-numbers-field.php
function strIsLetter(inputtxt) { 
  let letters = /^[a-zA-Z]+$/;
  if(inputtxt.match(letters)) {
    return true;
  } else {
    return false;
  }
}

// Adapted function from previous kata to check if string is a vowel
const isVowel = function(letter) {
  const validVowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < 5; i++) {
    if (validVowels[i] === letter.toLowerCase()) {
      return true;
    }
  }
  return false;
}

const caseFunctions = {
  camel: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, "", spaceFoundCapitalize, false, "camel") },
  pascal: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, "", spaceFoundCapitalize, false, "pascal") },
  snake: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, "_", false, true, "snake") },
  kebab: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, "-", false, true, "kebab") },
  title: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, " ", spaceFoundCapitalize, false, "title") },
  vowel: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, " ", false, false, "vowel") },
  consonant: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, " ", false, false, "consonant") },
  upper: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, " ", true, false, "upper") },
  lower: function(inputLetter) { return replaceSpaceCapitalize(inputLetter, " ", false, true, "lower") }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase(" this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("...this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

