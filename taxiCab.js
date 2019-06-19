const blocksAway = function(directions) {
  let currentDirection = "Start";

  // Create array for road grid
  let gridArray = generateGrid();
  console.log(gridArray);
  console.log(turnCar("right",currentDirection));
  console.log(turnCar("left",currentDirection));
  console.log(turnCar("right","South"));
  console.log(turnCar("left","West"));

  directions.forEach(function(direction, index) {
    if (index % 2 === 0) {

    } else {

    }
  });

}

const turnCar = function(turn, currentDirection) {
  const compassPoints = ["North", "East", "South", "West"];
  let directionIndex = compassPoints.indexOf(currentDirection);

  if (currentDirection === "Start" && turn === "right") {
    return "East";
  } else if (currentDirection === "Start" && turn === "left") {
    return "North";
  }

  if (turn === "right") {
    return compassPoints[(directionIndex === 3 ? -1: directionIndex) + 1];
  } else {
    return compassPoints[(directionIndex === 0 ? 4: directionIndex) - 1];
  }
}


const generateGrid = function() {
  let gridArray = new Array(16);
  // Iterate through each row of array
  for (let row = 0; row < 16; row++) {
    // Create new array for each row 
    gridArray[row] = new Array(16);
    for (let column = 0; column < 16; column++) {
      // Check if we are at the starting point of the puzzle
      if (row === 15 && column === 0) {
        gridArray[row][column] = 1;       
      } else {
        gridArray[row][column] = 0;
      }
    }
  }
  return gridArray;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));