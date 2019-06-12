const conditionalSum = function(values, condition) {
    let addArray = [];
    let finalSum = 0;
    let conditionPass;

    // Establish sum condition for compairson based on condition argument "odd" or "even"
    if (condition === "even") {
      conditionPass = 0;
    } else if (condition === "odd") {
      conditionPass= 1;
    } else {
      return "Please ensure condition is either 'odd' or 'even'";
    }

    if (values.length === 0) {
      return 0;
    } else  {
      // Iterate through all values in the passed array if value is a number
      values.forEach(function(value) {
        if (typeof (value) === "number") {
          if (value % 2 === conditionPass) {
            addArray.push(value);
          }
        } 
      });
      
      // Once all passing numbers have been stored in addArray, iterate through them to add all values and return
      addArray.forEach(function(sumNum) {
        finalSum += sumNum;
      });
      return finalSum;
    }
};

console.log(conditionalSum([1, 2, 3, 4, 6], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));