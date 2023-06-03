
let numberOfStudents = 15;
let numberOfMentors = 8;


let totalPeople = numberOfStudents + numberOfMentors;


let percentageStudents = Math.round((numberOfStudents / totalPeople) * 100);
let percentageMentors = Math.round((numberOfMentors / totalPeople) * 100);

console.log("Percentage students: " + percentageStudents + "%");
console.log("Percentage mentors: " + percentageMentors + "%");