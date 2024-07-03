function singleCheck (numOne, numTwo, numThree) {
    let numbers = [numOne, numTwo, numThree];
    let negativeNumbers = 0;

    for (let num of numbers) {
        if (num < 0) {
            negativeNumbers += 1;
        }
    }

    if (negativeNumbers == 2 || negativeNumbers == 0) {
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}


//Test code

// singleCheck(5, 12, -15)
// singleCheck(-6, -12, 14)
// singleCheck(-1, -2, -3)
// singleCheck(-5, 1, 1)
