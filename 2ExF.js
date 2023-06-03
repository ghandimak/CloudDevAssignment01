function checkUsername(username, userType) {
    if ((username[0] === username[0].toUpperCase()) && (username.length >= 5 && username.length <= 10)) {
      return "Username valid";
    } else if (userType === "admin" || userType === "manager") {
      return "Username valid";
    } else {
      return "Username invalid";
    }
  }
  