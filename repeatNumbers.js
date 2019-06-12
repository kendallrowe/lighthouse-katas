const repeatNumbers = function(data) {
  let printString = "";

  // Iterate through each array provided
  data.forEach(function(numberPair, index) {
    // For each array, use the second number in pair as a max and repeat the first number the corresponding amount of times
    for (let i = 0; i < numberPair[1]; i++) {
      printString += numberPair[0];
    }
    // If there are more numbers to be printed, add a comma and space accordingly
    if (index < (data.length - 1)) {
      printString += ", ";
    }
  });
 
  return printString; 
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[10, 0], [34, 0], [92, 2]]));