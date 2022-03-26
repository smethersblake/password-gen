var genPassword = '';
// Assignment code here
function generatePassword() {
    // var genPassword = '';
    // WHEN I click the button to generate a password
    // THEN I am presented with a series of prompts for password criteria
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    var passLength = window.prompt("Select password lenght. (8 - 128)");
    while (passLength < 8 || passLength > 128) {
        var passLength = window.prompt("Please select a vaild length (8 - 128)")
    }
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    var upperCase = window.confirm("Would you like upper case letters?")
    var passNumbers = window.confirm("Would you like numbers?")
    var specialChar = window.confirm("Would you like special characters?")
    console.log(upperCase, passNumbers, specialChar);
    console.log(passLength)
    generator(upperCase, passNumbers, specialChar, passLength);
    console.log('hello')
    console.log(genPassword);
    return genPassword;
    }

var generator = function(upperCase, passNumbers, specialChar, passLength) {
    genPassword = '';

    if (upperCase && passNumbers && specialChar) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+"
        console.log("all true");
    }
    else if (!upperCase && passNumbers && specialChar) {
            var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+"
        console.log("upper false");
    }
    else if (upperCase && !passNumbers && specialChar) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+"
        console.log('pass number false');
    }
    else if (upperCase && passNumbers && !specialChar) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        console.log("special false");
    }
    else if (!upperCase && !passNumbers && specialChar) {
            var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+"
        console.log('upper and number false');
    }
    else if (!upperCase && passNumbers && !specialChar) {
        console.log('upper and special false');
            var characters = "abcdefghijklmnopqrstuvwxyz0123456789"
    }
    else if (upperCase && !passNumbers && !specialChar){
        var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log('pass numbers and special false');
    }
    else {
        var characters = "abcdefghijklmnopqrstuvwxyz"
        console.log ('all false');
    }
    charactersLength = characters.length;
    console.log(characters.length)
    for ( var i = 0; i < passLength; i++) {
    genPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // console.log(genPassword);
    return genPassword;
}

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page


// generator();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);