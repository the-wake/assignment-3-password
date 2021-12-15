// Assignment Code

function getOptions() {
  var pwLength = prompt("How long would you like your password to be? (Between 8 and 128 characters.)");
  if (pwLength <8 || pwLength >128) {
    alert("Password length must be between 8 and 128 characters.")
    getOptions()
    // return null;
  }
  var pwCaps = confirm("Would you like to use capital letters (strongly encouraged!)?");
  var pwOptionsObj = {
    length: pwLength,
    caps: pwCaps,
  }
  return pwOptionsObj;
}

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwOptions = getOptions()
  console.log (pwOptions.length);
}

// Write password to the #password input
function writePassword() {
  // This variable becomes whatever that function returns when run.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

getOptions()

// Make generatePassword(); function.
  // Populate that function with the variables needed. Then return the object to populate the fields.
// Create way of interacting with user for them to put in via prompts.
// alert, prompt, confirm (returns a boolean) are the big 3.
// Can have one function that asks all of these questions and validates inputs.
// Prompts always return strings, so you need to turn that into an integer.
// Once you get the options, those customize an object.
// Can pull a random index from whatever the output is.