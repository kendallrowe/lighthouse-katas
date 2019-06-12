const numberOfVowels = function(data) {
  let vowelCount = 0;

  if (typeof (data) === "string") {
    for (let j = 0; j < data.length; j++) {
      
      vowelCount += checkLetters(data.charAt(j));
    }
  }

  return vowelCount;
};

let checkLetters = function (letter) {
  const validVowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < 5; i++) {
    if (validVowels[i] === letter) {
      return 1;
    }
  }

  return 0;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("tyrq"));