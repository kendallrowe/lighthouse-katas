const sumLargestNumbers = function(data) {
  let largeNumArr = [null, null];
  
  // Check argument meets minimum length criteria
  if (data.length < 2) {
    return "Please make sure to pass 2 or more numbers in your array";
  } else  {
    data.forEach(function(value, index, arr) {
      
    });
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));