const class1 = ["Viky", "JP", "Amy"];
const class2 = ["Dani", "Mike", "Sarah"];

// Combine the two arrays
const combinedClass = class1.concat(class2);

// Sort the names in alphabetical order
const sortedNames = combinedClass.sort();

// Log the names in alphabetical order
console.log(sortedNames);

// Function to check if a name is in the array
function checkName(name, array) {
  if (array.includes(name)) {
    return `${name} is at the class with ${array.join(", ")}`;
  } else {
    return `${name} is not at the class with ${array.join(", ")}`;
  }
}

// Test the function
console.log(checkName("Viky", sortedNames));
console.log(checkName("Emma", sortedNames));