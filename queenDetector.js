const generateBoard = function(whiteQueen, blackQueen) {
  let boardArray = new Array(8);
  
  // Iterate through each row of array
  for (let row = 0; row < 8; row++) {
    // Create new array for each row 
    boardArray[row] = new Array(8);
    for (let column = 0; column < 8; column++) {
      // Check for white and black queen
      if (queenIsHere(whiteQueen, row, column) === true) {
        boardArray[row][column] = 1;       
      } else if (queenIsHere(blackQueen, row, column) === true) {
        boardArray[row][column] = 1;        
      } else {
        boardArray[row][column] = 0;
      }
    }
  }
  return boardArray;
}

// Function to check if a queen is present at current coordinates
const queenIsHere = function(colourQueen, row, column) {
  if(colourQueen[0] === row && colourQueen[1] === column) {
    return true;
  } else {
    return false;
  }
}



let generatedBoard = generateBoard([0, 5], [5, 0]);
console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));