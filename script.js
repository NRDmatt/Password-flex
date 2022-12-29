// Assignment code here

// Get references to the #generate element
// Giving password generator numbers,symbols, and characters to generate a password.
var generateBtn = document.querySelector("#generate");

  let Numbers = ['1','2','3','4','5','6','7','8','9','0'];
  let Symbol = ['!','@','#','$','%'];
  let Character = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',];
  let possibleChars = [];
  
  function generatePassword(){
  
 
    // Giving the password generator prompts and options to generate a password.
    let charCount = window.prompt("How many characters would you like ur password to be?");{
      if (parseInt)(charCount)<8 || (parseInt)(charCount)>128
        alert ("Your password must be between 8 and 128 characters!");}
    
    let Character = window.confirm ("Would you like your password to contain upper and lower case letters?");
    let Numbers = window.confirm ("Would you like your password to contain numbers");
    let Symbol = window.confirm ("Would you like your password to contain symbols");
      if(Character == false && Numbers == false && Symbol == false){
        alert ("You need to select atleast one of the listed options");
        return null;
      
      }
      
      for (let i = 0; i < charCount; ++i) {
        let random = Math.floor(Math.random() * Math.floor(possibleChars.length));
        password += possibleChars[random];
    }
     {
      var length = 8,
          charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
  }
}
    

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
