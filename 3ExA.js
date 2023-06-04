let tablePeople = ["John", "Kate", "Amy"];
console.log(tablePeople); // Output: ["John", "Kate", "Amy"]
console.log("Number of people at the table:", tablePeople.length); // Output: Number of people at the table: 3

tablePeople.unshift("Tom"); // Add someone from another table at the beginning
console.log(tablePeople); // Output: ["Tom", "John", "Kate", "Amy"]
console.log("Number of people at the table:", tablePeople.length); // Output: Number of people at the table: 4

tablePeople.push("Mike"); // Add someone else to the end of the list
console.log(tablePeople); // Output: ["Tom", "John", "Kate", "Amy", "Mike"]
console.log("Number of people at the table:", tablePeople.length); // Output: Number of people at the table: 5