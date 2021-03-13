// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned Variables
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}",",",".","<",">","?","|","-","_","=","+"];

// Empty array variables
var resultArray = [];
var userArray = [];

// Generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){
  // Do random generation here and return the final password in the end
  var result = "";
  // Ask the user how many characters they want
  var length = prompt("How many characters in your random password (between 8 and 128)?");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword();
  }
  if(length<8 || length>128){
    alert("Please choose a number between 8 to 128!");
    return generatePassword();
  }
  // Ask the user if they want to include upper, lower, numbersand special characters
  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if (!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("You must at least choose 1 character type!");
    return generatePassword();
  }
  if (hasUpper){
    resultArray = resultArray.concat(upper);
  }
  if (hasLower){
    resultArray = resultArray.concat(lower);
  }
  if (hasNumbers){
    resultArray = resultArray.concat(numbers);
  }
  if (hasSpecial){
    resultArray = resultArray.concat(special);
  }
  console.log(resultArray);

  for (var i = 0; i < length; i++) {
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  return userArray.join("");
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
