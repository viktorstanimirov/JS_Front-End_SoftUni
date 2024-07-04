function passwordValidator(input) {
    const lettersAndDigitsOnly = /^[A-Za-z\d]+$/;
    const atLeastTwoDigits = /\d.*\d/;

    let password = input;
    let passwordMatch = true


    if (password.length < 6 || password.length > 10) {
        passwordMatch = false;
        console.log('Password must be between 6 and 10 characters');
    }

    if (!lettersAndDigitsOnly.test(password)) {
        passwordMatch = false;
        console.log('Password must consist only of letters and digits');
    }

    if (!atLeastTwoDigits.test(password)) {
        passwordMatch = false;
        console.log('Password must have at least 2 digits');
    }

    if (passwordMatch) {
        console.log('Password is valid');
    }

}


//Test code

// passwordValidator('logIn')
// passwordValidator('MyPass123')
// passwordValidator('Pa$s$s')