// Assignment code here
var generateBtn = document.querySelector("#generate");


var allowedCharacters = [];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/'];


  //function moved this out of the generate password () so that i could run a the loop?
//if they enter a response that is >8 || <128 the input will be taken and applied, user goes to the next prompt
function generatePassword() {
  console.log("button was clicked");
while (true) {
var passwordLength = prompt("Pick a length of password between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);
 if (passwordLength >= 8 && passwordLength <= 128) {
   console.log("your password meets the criteria");
  break;  
  }
    //if player enters a length <8 they will get a prompt that says "enter a valid response"
  else {
    alert("Please pick a length of password between 8 and 128 characters. Try again.");
}
}
//confirm prompt for numbers, upper, lower, special characters
var isNumber = window.confirm("Do you want to include numbers?");
if (isNumber) { 
  allowedCharacters = allowedCharacters.concat(numbers);
}
else {
};

var isLowerCase = window.confirm("Do you want to include a lowercase letter?");
if (isLowerCase) {
  allowedCharacters = allowedCharacters.concat(lowerCase);
  console.log(isLowerCase);
} 
///DO I NEED ANY ELSE STATEMENTS?
else {
  console.log("Dont add a lowercase letter!")
};
//if confirm add a lower case and go to the next prompt
var isUpperCase = window.confirm("Do you want to include uppercase letters?");
if (isUpperCase) {
  allowedCharacters = allowedCharacters.concat(upperCase);
}
else {
  console.log("no uppercase letter");
};
//if confirm add uppercase go to the next prompt
var isSymbols = window.confirm("Do you want to include symbols?");
if (isSymbols) {
  allowedCharacters = allowedCharacters.concat(symbols);
}
var password = "";
//loop variable i create i will return
for(var i = 1; i <= passwordLength; i++) {
var random = Math.floor(Math.random() * allowedCharacters.length);
password = allowedCharacters[random] + password

}
//display the password
  return password
};

function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 
//this will run the function
//for loop to choose length
//for(i= 0; i =< passwordLength; i++);

//while(passwordLength) {
  //passwordText.value = allowedCharacters(Math.floor((Math.random() * ?)))};

  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
//plugs it into the screen
 // passwordText.value = password;

 
//event listener to click button
generateBtn.addEventListener("click", writePassword);
