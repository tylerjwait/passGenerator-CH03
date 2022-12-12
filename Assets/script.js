// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // once you press the generate button a pop up shows up to ask you how long you want your password to be.
  var  passwordLength = prompt("How long do you want your password to be? (between 8-128 characters");

  // Run this code if all criteria for  password length is met
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128); {

   // Below are items allowed to be in the password using an array
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var special   = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var number    = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // assign command to pull from any of the variables defined above
    var passwordSet = [];
    var password = [];

    // include special characters or not to include special characters
    var chooseSpecial = confirm("Include special characters? Cancel / Ok")
    if (chooseSpecial == true) {
      passwordSet = passwordSet.concat(special)
    };

    // include number characters or not to include number characters
    var chooseNumber = confirm("Include number characters? Cancel / Ok")
    if (chooseNumber == true) {
      passwordSet = passwordSet.concat(number)
    };

    // include UPPER CASE characters or not to include UPPER CASE characters
    var chooseupperCase = confirm("Include UPPER CASE characters? Cancel / Ok")
    if (chooseupperCase == true) {
      passwordSet = passwordSet.concat(upperCase)
    };

    // include lower case characters or not to include lower case characters
    var chooselowerCase = confirm("Include lower case characters? Cancel / Ok")
    if (chooselowerCase == true) {
      passwordSet = passwordSet.concat(lowerCase)
    };
    
    // error pop up if nothing was selected from variables above
    if (chooseNumber == false && chooseSpecial == false && chooselowerCase == false && chooseupperCase == false) {
      // send error message
      alert ("You must choose ONE or more of the password criteria.")
    }
    // below will display the actual method of generating a random password
    for (i =0; i < passwordLength; i++) {

      // I wasnt sure about these math variables so it took some time to find what I wanted to do on MDN
      var randomNumber = MAth.floor(MAth.random() * passwordSet.length);
     
      // password variable  will now work with the Math algorithm to generate a random password
      password =  password.concat(passwordSet[randomNumber])
    };

    password = password.toString("")

    return password;
  }

  else {

    alert("You must enter a number between 8 and 128 to proceed.")
  }
}

