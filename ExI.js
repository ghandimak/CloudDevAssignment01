// This function calculates the year someone is born given their age as input
function getBirthYearFromAge(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    return birthYear;
  }
  
  // This function for someone's name and age and returns a string stating their name and year of birth
  function createBirthYearMessage(name, age) {
    const birthYear = getBirthYearFromAge(age);
    const message = "My name is " + name + " and I was born in the year " + birthYear + "!";
    return message;
  }
  
  // Example 
  const name = "Ghandi";
  const age = 32;
  const birthYearMessage = createBirthYearMessage(name, age);
  console.log(birthYearMessage);