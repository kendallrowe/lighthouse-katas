const multiplicationTable = function(maxValue) {
  let multiplyArray = [];
  
  // Iterate through each number from 1 to the max value and call the create row function
  // to generate a new array for each row
  for (let i = 1; i <= maxValue; i++) {
    multiplyArray.push(createRow(i, maxValue));
  }

  return arrayToString(multiplyArray);
};

const createRow = function(rowNum, maxValue) {
  let rowArray = [];
  // Multiply the row number by each column number and add to the row array to generate row
  for (let j = 1; j <= maxValue; j++) {
    rowArray.push(rowNum * j);
  }
  return rowArray;
}

const arrayToString = function(multiplyArray) {
  let printString = "";
  // Step through each row and go cell by cell through each, storing the cell value into string
  multiplyArray.forEach(function(row, rowIndex) {
    row.forEach(function(cellValue, cellIndex){
      // If the cell being added to string is the last of it's row, but not the last 
      // row of the table, add a newline tag
      if (cellIndex === (row.length - 1) && rowIndex !== (multiplyArray.length - 1)) {
        printString += cellValue + "\n";
      } else {
        // If cell is not the last of it's row, add a trailing whitespace after it
        printString += cellValue + " ";
      }
    });
  });

  return printString;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));