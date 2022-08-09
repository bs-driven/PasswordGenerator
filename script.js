// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowCaseLetter = ["a", "b", "c", "d","e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w", "x", "y", "z"];

var upperCaseLetter = ["A", "B", "C", "D","E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V","W", "X", "Y", "Z"];

var specialCharacter = ["!", "@", "#", "$","%","^","&","*","?","<",">"];

var numeric =["0","1","2","3", "4","5", "6","7","8","9"];





// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")
  //document.getElementById("button").addEventListener('click')
  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password=""
  var userPicks =[]
   var passwordLength= window.prompt("Please choose a number between 8 and 128 for your password length.")

   if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please eneter a number between 8 and 128.")
    return null
   }



var userNumericChoice= window.confirm("Would you like you your password to have numeric values?")
if (userNumericChoice){
  userPicks= userPicks.concat(numeric)
}


var userUpperCaseChoice= window.confirm( "Would you like your password to have uppercase letters?")
if (userUpperCaseChoice){
  userPicks= userPicks.concat(upperCaseLetter)
}

 var userSpecialCharcChoice= window.confirm("Would you like your password to have special characters?")
 if (userSpecialCharcChoice){
  userPicks= userPicks.concat(specialCharacter)
}

 var userLowerCaseChoice= window.confirm("Would you like your password to have lowercase letters?")

 if (userLowerCaseChoice){
  userPicks= userPicks.concat(lowCaseLetter)
}

 if (!userNumericChoice && !userLowerCaseChoice && !userUpperCaseChoice && !userSpecialCharcChoice) {
  window.alert("You must choose Ok to at least one charcater option presented.")
  return null


 }
console.log(userPicks)

for (let index = 0; index < passwordLength; index++) {
  var charcater = userPicks[Math.floor(Math.random() *userPicks.length)]
  console.log(charcater)
  password+= charcater

  
}
return password;


}
