const sumLargestNumbers = function(data) {
  let largeNumberPair = [];
  // Check argument meets minimum length criteria
  if (data.length < 2) {
    return "Please make sure to pass 2 or more numbers in your array";
  } else  {
    // Iterate through all values in the passed array and apply the check number pair function if value is a number
    data.forEach(function(value, index, arr) {
      if (typeof(value) === "number") {
        checkNumberPair(largeNumberPair, value);
      } else {
        return  "Please ensure to pass only numbers";
      }
    });

    return largeNumberPair[0] + largeNumberPair[1];
  }
};

// Function to compair passed numCheck value against the current largest pair and add if larger
function checkNumberPair (pairArray, numCheck) {
  // Automatically store first two numbers passed
  if(pairArray.length < 2) {
    return pairArray.push(numCheck);
  } else {
    // Check if compare value is larger than the smallest number stored so far
    if(numCheck < Math.min(...pairArray)) {
      return pairArray
    } else {
      // If compare value is larger than the smallest of the number pair, update current largest number pair and return
      for(let i = 0; i < 2; i++) {
        if (pairArray[i] === Math.min(...pairArray)) {
          pairArray[i] = numCheck;
          return pairArray;
        }
      }
    }
  }
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));