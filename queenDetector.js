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

const queenThreat = function(chessBoard) {
  let queen1 = new Array(2);
  let queen1Found = false;
  let queen2 = new Array(2);
  // Iterate through board to find location of queens
  // Iterate through each row of array
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (chessBoard[row][column] === 1) {
        if (queen1Found === false) {
          queen1Found = true;
          queen1 = [row, column];
        }  else {
          queen2 = [row, column];
        }
      } 
    }
  }
  // If the queens are on the same row or column, return true - there is a threat
  if (queen1[0] === queen2[0] || queen1[1] === queen2[1]){
    return true;
  }
  // Iterate through diagonal using queen one as starting point to check for threats
  return checkDiagonals(chessBoard, queen1);
}

const checkDiagonals = function(chessBoard, queen1) {
  let currentRow = queen1[0];
  let currentCol = queen1[1];

  // Iterate through all squares above and to left of our starting queen position
  while (currentRow >= 0 && currentCol >= 0) {
    if (currentRow !== queen1[0] && currentCol !== queen1[1]) {
      if(chessBoard[currentRow][currentCol] === 1) {
        return true;
      }
    }
    currentRow--;
    currentCol--;
  }
  currentRow = queen1[0];
  currentCol = queen1[1];
  
  // Iterate through all squares above and to right of our starting queen position
  while (currentRow >= 0 && currentCol <= 7) {
    if (currentRow !== queen1[0] && currentCol !== queen1[1]) {
      if(chessBoard[currentRow][currentCol] === 1) {
        return true;
      }
    }
    currentRow--;
    currentCol++;
  }
  currentRow = queen1[0];
  currentCol = queen1[1];

  // Iterate through all squares below and to left of our starting queen position
  while (currentRow <= 7 && currentCol >= 0) {
    if (currentRow !== queen1[0] && currentCol !== queen1[1]) {
      if(chessBoard[currentRow][currentCol] === 1) {
        return true;
      }
    }
    currentRow++;
    currentCol--;
  }
  currentRow = queen1[0];
  currentCol = queen1[1];

  // Iterate through all squares below and to right of our starting queen position
  while (currentRow <= 7 && currentCol <= 7) {
    if (currentRow !== queen1[0] && currentCol !== queen1[1]) {
      if(chessBoard[currentRow][currentCol] === 1) {
        return true;
      }
    }
    currentRow++;
    currentCol++;
  }

  return false;
}

let generatedBoard = generateBoard([0, 5], [5, 0]);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
