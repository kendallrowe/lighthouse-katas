const organizeInstructors = function(instructors) {
  // Create organized instructors object with properties for each course that will hold all instructors that are relevant
  let organizedInstructors = {
    Blockchain: [],
    iOS: [],
    Web: []
  };
  const courseList = ["Blockchain", "iOS", "Web"];

  // Go through each instructor object and add it to organized instructors object based on the course property of instructor
  instructors.forEach(function(instructor) {
    switch (instructor.course) {
      case "Blockchain": 
        organizedInstructors["Blockchain"].push(instructor.name);
        break;
      case "iOS":
        organizedInstructors["iOS"].push(instructor.name);
        break;
      case "Web":
        organizedInstructors["Web"].push(instructor.name);
        break;
    }
  });

  // Check each course property of the organized instructors object to see whether any instructors were found
  for (let i = 0; i < 3; i++) {
    // Check the length of the current course property within organized instructors object to check that a name was added
    if (organizedInstructors[courseList[i]].length === 0) {
      delete organizedInstructors[courseList[i]];
    }
  }

  return organizedInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));