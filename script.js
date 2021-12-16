// Assignment Code
var minTypes = 1;
var minChar = 8;
var maxChar = 128;
var generateBtn = document.querySelector("#generate");

var characters = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "=", ":", ";", "?", "/", ",", "."]
  // I'm leaving out some special characters depending on how inconvenient they are to enter, and/or how likely they are to get misread (by the user or a system).
}

function getRandom(array) {
  var placeholderIndex=Math.floor(Math.random()*array.length);
  var randomElement=array[placeholderIndex];
  return randomElement;
};

function getOptions() {
  var pwLength = prompt("How long would you like your password to be? (Between " + minChar + " and " + maxChar + " characters.)");
  if (pwLength < minChar || pwLength > maxChar) {
    alert("Password length must be between " + minChar + " and " + maxChar + " characters.");
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

  if ((pwLower + pwCaps + pwNums + pwSpec) < minTypes) {
    alert("You must choose at least " + minTypes + " type(s) of characters.");
    return null;
  }
  
  return pwOptionsObj;
}

// If I didn't think I'd break anything, I could have this whole thing shut down if the paramaters aren't met by having getOptions return x and then evaluate that getOptions !=x before it runs.

function generatePassword() {
  var pwOptions = getOptions();

  // Used to validate random selector.
  // getRandom(characters.lower);
  // console.log(getRandom(characters.lower));

  var useChars = [];
  
  console.log (pwOptions);
  
  if (pwOptions.lower) {
    useChars.push(...characters.lower);

    // We can use this to guarantee at least 1 character from each selected string.
    // var guaranChars = []; -- has to be popped out to the next level up.
    // guaranChars.push(useChars[Math.floor(Math.random()*useChars.length)])
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

  var pwGen = [];
  for (var i = 0; i < pwOptions.length; i++) {
    var useChar=getRandom(useChars);
    pwGen.push(useChar);
  }

  // Before adding the pwGen.push line, only got 1 character because each character was being overwritten.

  console.log(pwGen);
  return pwGen.join("");
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
// -- Can pull a random index from whatever the output is.