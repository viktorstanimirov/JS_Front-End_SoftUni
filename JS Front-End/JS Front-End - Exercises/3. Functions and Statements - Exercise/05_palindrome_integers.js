function palindromeIntegers(inputArray) {
    let inputStr = inputArray.toString().split(',');

    for (let num of inputStr) {
        let reverseStr = num.split('').reverse().join('')

        if (num == reverseStr) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
}

// Test code

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
