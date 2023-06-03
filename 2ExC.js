function numberChecker(num) {
    if (num > 20) {
      return `${num} is greater than 20`;
    } else if (num === 20) {
      return `${num} is equal to 20`;
    } else if (num < 20) {
      return `${num} is less than 20`;
    } else {
      return `${num} isn't even a number :(`;
    }
  }
  // Explanation 
  //The function numberChecker is defined with a single parameter num.
The if statement checks if the value of num is greater than 20. If the condition is true, it returns a string ${num} is greater than 20.
If the condition of the first if statement is not met, the else if statement checks if num is exactly equal to 20. If it is true, it returns a string ${num} is equal to 20.
If neither the first if statement nor the else if statement is true, the next else if statement checks if num is less than 20. If it is true, it returns a string ${num} is less than 20.
If none of the above conditions are met, the last else statement is executed, which means num is not a number. It returns a string ${num} isn't even a number :(.
The function uses conditional statements to determine the relationship between the input num and the number 20, and it returns a corresponding message based on the condition that is met.
When you pass in a string to the numberChecker function, it will compare the string with the conditions in the if statements.