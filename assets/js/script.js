// creating object in global scope to be referenced throughout all functions
var characterObj = {
    special: {
        allowed: false,
        characters: "!@#$%^&*"
    },
    capital: {
        allowed: false,
        characters: "QWERTYUIOPASDFGHJKLZXCVBNM"
    },
    lower: {
        allowed: false,
        characters: "qwertyuiopasdfghjklzxcvbnm"
    },
    number: {
        allowed: false,
        characters: "1234567890"
    },
    passwordLength: 0
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Setting password length variable through window prompt
// characterObj.passwordLength = Number(window.prompt("How many characters would you like your password to be?"));
// while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 32) passwordLength = Number(window.prompt("Password must be at least 8 characters and no more than 32 in length."))

// Choosing character inputs through confirm windows
function characters() {
    // Setting password length variable through window prompt
    characterObj.passwordLength = Number(window.prompt("How many characters would you like your password to be?"));
    while (isNaN(characterObj.passwordLength) || characterObj.passwordLength < 8 || characterObj.passwordLength > 128) characterObj.passwordLength = Number(window.prompt("Password must be at least 8 characters and no more than 128 in length."))
    characterObj.special.allowed = window.confirm("Would you like to include special characters in your password? (!@#$%^&*)");
    characterObj.capital.allowed = window.confirm("Would you like to include capital lettering in your password? (ABC)");
    characterObj.lower.allowed = window.confirm("Would you like to include lowercase letters in your password? (abc)");
    characterObj.number.allowed = window.confirm("Would you like to include numbers into your password? (0123456789)");
    // creating while loop to return to characters function if no selection is made
    if (!characterObj.special.allowed && !characterObj.capital.allowed && !characterObj.lower.allowed && !characterObj.number.allowed) {
        alert("You must select at least one character type.");
        return characters();
    }
};

// Write password to the #password input
function writePassword() {
    var password = "";
    var passwordText = document.querySelector("#password");
    characters();

    // taking characterObj strings and putting them into one string for complete randomization
    var currentPasswordValues = "";
    if (characterObj.special.allowed) {
        currentPasswordValues += characterObj.special.characters;
    }
    if (characterObj.capital.allowed) {
        currentPasswordValues += characterObj.capital.characters;
    }
    if (characterObj.lower.allowed) {
        currentPasswordValues += characterObj.lower.characters;
    }
    if (characterObj.number.allowed) {
        currentPasswordValues += characterObj.number.characters;
    }

    for (var i = 0; i < characterObj.passwordLength; i++) {
        // taking combined "true" strings and randomizing with rando.js
        password += rando(currentPasswordValues);
    }
    // passing the values into "password"
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);