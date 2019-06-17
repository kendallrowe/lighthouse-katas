
const calculateChange = function(total, cash) {
  let changeGiven = new Object();
  let remainder = cash - total;
  
  if (remainder < 0) {
    return "No change is owed, customer has underpaid and must pay more.";
  } else if (remainder === 0) {
    return "No change is owed.";
  }

  // Apply denomination function for each monetary unit and reduce remaining change to be paid accordingly
  remainder = checkDenomination(changeGiven, remainder, 2000, "twentyDollar");

  remainder = checkDenomination(changeGiven, remainder, 1000, "tenDollar");
 
  remainder = checkDenomination(changeGiven, remainder, 500, "fiveDollar");

  remainder = checkDenomination(changeGiven, remainder, 200, "twoDollar");

  remainder = checkDenomination(changeGiven, remainder, 100, "oneDollar");

  remainder = checkDenomination(changeGiven, remainder, 25, "quarter");

  remainder = checkDenomination(changeGiven, remainder, 10, "dime");

  remainder = checkDenomination(changeGiven, remainder, 5, "nickel");

  remainder = checkDenomination(changeGiven, remainder, 1, "penny");



  return changeGiven;
  
};

let checkDenomination = function(changeGiven, remainder, denomNum, denomName) {
  
  // Take the lowest round number from quotient of remaining change to calculate divided by denomination units
  const denomCount = Math.floor(remainder / denomNum);

  // If 1 or more units are to be given as change, add them to the total change returned object and reduce remaining change
  if (denomCount >= 1) {
    changeGiven[denomName] = denomCount;
    remainder -= denomCount * denomNum;
  }

  return remainder;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));