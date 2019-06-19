let prompt = require("prompt-sync")();

const randomNumber = function() {
  return Math.round(Math.random() * (100));
}

const evaluateResponse = function() {
  let answer = prompt("Guess a whole number between 1 and 100: ");
  let convertedAnswer;
  let answerFound = false;
  let numbersAlreadyGuessed = [];
  let numberOfGuesses = 0;

  while (answerFound === false) {
    // Attempt to convert input into number and throw error if unable to convert. Allow user to reattempt
    convertedAnswer = parseInt(answer);
    if (typeof(convertedAnswer) !== "number") {
      console.log("Not a number! Try again!");
      // Search through logged guesses to see if they have already tried this guess
    } else if (numbersAlreadyGuessed.indexOf(convertedAnswer) > -1) {
      console.log("Already guessed!");
    } else {
      numberOfGuesses++;
      // If user guessed exact right number, exit function and return success message
      if (secretNumber === convertedAnswer) {
        answerFound = true;
        return "You got it! You took " + numberOfGuesses + " attempts!";
      } else {
        // If guess is incorrect, add guessed number to array of attempted guesses and return message if they are too high or low
        numbersAlreadyGuessed.push(convertedAnswer);
        console.log(convertedAnswer > secretNumber ? "Too High!" : "Too Low!");
      }
    }
    answer = prompt("Guess again: ");
  }
}

const secretNumber = randomNumber();
console.log(evaluateResponse());
console.log("The answer was: " + secretNumber);