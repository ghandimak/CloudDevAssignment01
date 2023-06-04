function secondMatchesAmy(array) {
    if (array[2] === "Amy") {
      return "Second index matched!";
    }
    return "Second index not matched";
  }
  
  const names = ["John", "Kate", "Amy", "Tom"];
  console.log(secondMatchesAmy(names)); // Output: Second index matched!
  
  const otherNames = ["Alice", "Bob", "Charlie"];
  console.log(secondMatchesAmy(otherNames)); // Output: Second index not matched
