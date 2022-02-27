// Setting password length variable through window prompt
var passwordLength = Number(window.prompt("How many characters would you like your password to be?"));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 32) passwordLength = Number(window.prompt("Password must be at least 8 characters and no more than 32 in length."))

// Choosing character inputs through confirm windows
function characters() {
    var specialChar = window.confirm("Would you like to include special characters in your password? (!@#$%^&*)");
    var capital = window.confirm("Would you like to include capital lettering in your password? (ABC)");
    var lower = window.confirm("Would you like to include lowercase letters in your password? (abc)");
    var number = window.confirm("Would you like to include numbers into your password? (0123456789)");
    // creating while loop to return to characters function if no selection is made
    while (!specialChar && !capital && !lower && !number) {
        alert("You must select at least one character type.");
        return characters();
    };
    writePassword(specialChar, capital, lower, number);
};

characters();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(specialChar, capital, lower, number) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    var allowed = {};
    if (specialChar) password += rando(allowed.specialChar = "!@#$%^&*");
    if (capital) password += rando(allowed.capital = "QWERTYUIOPASDFGHJKLZXCVBNM");
    if (lower) password += rando(allowed.lower = "qwertyuiopasdfghjklzxcvbnm");
    if (number) password += rando(allowed.number = "1234567890");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);