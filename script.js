// Assignment Code
var generateBtn = document.querySelector("#generate");

function getOptions() {
  var pwLength = prompt("How long would you like your password to be? (Between 8 and 128 characters.)");
  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }

  var pwLower = confirm("Use lowercase letters?");
  var pwCaps = confirm("Use capital letters?");
  var pwNums = confirm("Use numbers?");
  var pwSpec = confirm("Use special characters? (E.g. !, ?, /)");
  var pwOptionsObj = {
    length: pwLength,
    lower: pwLower,
    caps: pwCaps,
    nums: pwNums,
    spec: pwSpec
  }

  // This line eventually supposed to check if you've chosen 2 or more, but I'm not sure if there's a way to sum booleans or how I'd do that.
  if (3 < 2) {
    alert("You must choose at least 2 types of characters.");
    return null;
  }
  
  return pwOptionsObj;
}

function generatePassword() {
  var characters = {
    lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", ":", ";", "?", "/", ",", "."]
    // I'm leaving out some special characters depending on how inconvenient they are to enter, and/or how likely they are to get misread (by the user or a system).
  }

  var pwOptions = getOptions()

  var useChars = [];

  console.log (pwOptions);

  if (pwOptions.lower) {
    useChars.push(...characters.lower);
  }
  if (pwOptions.caps) {
    useChars.push(...characters.upper);
  }
  if (pwOptions.nums) {
    useChars.push(...characters.number);
  }
  if (pwOptions.spec) {
    useChars.push(...characters.special);
  }

  console.log (useChars);
  
  var pwGen = 0;
  for (var i = 0; i < pwOptions.length; i++) {
    var pwGen = useChars[Math.floor(Math.random()*useChars.length)];
  }

  console.log(pwGen);
  return pwGen;
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

// -- Make generatePassword(); function.
// -- Populate that function with the variables needed. Then return the object to populate the fields.
// -- Create way of interacting with user for them to put in via prompts.
// -- alert, prompt, confirm (returns a boolean) are the big 3.
// -- Can have one function that asks all of these questions and validates inputs.
// -- Prompts always return strings, so you need to turn that into an integer.
// -- Once you get the options, those customize an object.
// Can pull a random index from whatever the output is.