// This function takes in two strings and a number as inputs, concatenates the strings,
// performs a multiplication operation on the number, and returns a string with the result.
function combineStringsAndMultiply(string1, string2, number) {
    let concatenatedString = string1 + string2;
    let multipliedNumber = number * 2;
    return "Combined string: " + concatenatedString + ", Multiplied number: " + multipliedNumber;
  }
  
  // Calling the function and running the script
  let result = combineStringsAndMultiply("Hello ", "World", 5);
  console.log(result);

  //The difference between return and console.log is that return is used within a function to provide a value back to the caller of the function. It terminates the function
  //On the other hand, console.log is used to display a value or message in the console for debugging or informational purposes
  // Functions are beneficial when you want to reuse a block of code that performs a specific task. They allow you to encapsulate a set of instructions into a single unit that can be called and executed multiple times with different inputs.