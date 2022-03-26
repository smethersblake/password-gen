var genPassword = '';
// Assignment code here
function generatePassword() {

    var passLength = window.prompt("Select password lenght. (8 - 128)");
    while (passLength < 8 || passLength > 128) {
        var passLength = window.prompt("Please select a vaild length (8 - 128)")
    };
    var upperCase = window.confirm("Would you like upper case letters?")
    var passNumbers = window.confirm("Would you like numbers?")
    var specialChar = window.confirm("Would you like special characters?")
    console.log(upperCase, passNumbers, specialChar);
    console.log(passLength)
    generator(upperCase, passNumbers, specialChar, passLength);
    console.log(genPassword);
    return genPassword;
    }

var generator = function(upperCase, passNumbers, specialChar, passLength) {
    // resets var genPassword to an empty string for a new password to be generated
    genPassword = '';
    // switch case to determine what options the user decide for thir password
    switch(upperCase, passNumbers, specialChar){
        case upperCase && passNumbers && specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+"
            console.log("all true");
            break;
        case !upperCase && passNumbers && specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+"
            console.log("upper false");
            break;
        case upperCase && !passNumbers && specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+"
            console.log('pass number false');
            break;
        case upperCase && passNumbers && !specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            console.log("special false");
            break;
        case !upperCase && !passNumbers && specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+"
            console.log("upper and number false");
            break;
        case !upperCase && passNumbers && !specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyz0123456789"
            console.log("upper and special false");
            break;
        case upperCase && !passNumbers && !specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            console.log("numbers and special false");
            break;
        case !upperCase && !passNumbers && !specialChar:
            var characters = "abcdefghijklmnopqrstuvwxyz"
            console.log("all false");
            break;
    }
    // sets the var charactersLenght to the lenght of the string of characters of selected options
    charactersLength = characters.length;
    // takes the var characters to select at random
    console.log(characters.length)
    for ( var i = 0; i < passLength; i++) {
    genPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // returns the generated password to the global var genPassword
    return genPassword;
};

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
