const compassPoints = ["North", "East", "South", "West"];

const blocksAway = function(directions) {
  let currentDirection = "Start";
  let currentCoordinates = [15, 0];
  let finalBlocksAway = new Object();

  // Create array for road grid
  // let gridArray = generateGrid();
  // gridArray = updateGrid(gridArray, currentCoordinates, 1);

  // console.log("Beginning Location: ");
  // console.log(gridArray);


  directions.forEach(function(direction, index) {
    if (index % 2 === 0) {
      currentDirection = turnCar(direction, currentDirection);
    } else {
      // gridArray = updateGrid(gridArray, currentCoordinates, 0);
      currentCoordinates = movingDirectionConversion[currentDirection](currentCoordinates, direction);
      // gridArray = updateGrid(gridArray, currentCoordinates, 1);
    }
  });

  finalBlocksAway.East = currentCoordinates[1];
  finalBlocksAway.North = 15 - currentCoordinates[0];
  // console.log("Ending Location: ");
  // console.log(gridArray);

  return finalBlocksAway;
}

// const updateGrid = function(gridArray, currentCoordinates, carPresent) {
//   gridArray[currentCoordinates[0]][currentCoordinates[1]] = carPresent;
//   return gridArray
// }

// Object holding methods that will take a given direction, current coordinates of location, and 
// number of blocks to move and return the new coordinates of lcoation after moving forward this number of blocks
const movingDirectionConversion = {
  North: function(currentCoordinates, numberOfBlocks) { currentCoordinates[0] -= numberOfBlocks; 
    return currentCoordinates;
  },
  East: function(currentCoordinates, numberOfBlocks) { currentCoordinates[1] += numberOfBlocks; 
    return currentCoordinates;
  },
  South: function(currentCoordinates, numberOfBlocks) { currentCoordinates[0] += numberOfBlocks; 
    return currentCoordinates;
  },
  West: function(currentCoordinates, numberOfBlocks) { currentCoordinates[1] -= numberOfBlocks; 
    return currentCoordinates;
  }
}

const turnCar = function(turn, currentDirection) {
  let directionIndex = compassPoints.indexOf(currentDirection);
  // For the first direction, a left turn will result in North and right in East as per kata instructions
  if (currentDirection === "Start" && turn === "right") {
    return "East";
  } else if (currentDirection === "Start" && turn === "left") {
    return "North";
  }

  // Adjust index based on the given direcction and return thew new compass point by increasing or decreasing index accordingly
  if (turn === "right") {
    return compassPoints[(directionIndex === 3 ? -1: directionIndex) + 1];
  } else {
    return compassPoints[(directionIndex === 0 ? 4: directionIndex) - 1];
  }
}

// const generateGrid = function() {
//   let gridArray = new Array(16);
//   // Iterate through each row of array
//   for (let row = 0; row < 16; row++) {
//     // Create new array for each row 
//     gridArray[row] = new Array(16);
//     for (let column = 0; column < 16; column++) {
//       gridArray[row][column] = 0;
//     }
//   }
//   return gridArray;
// }


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));