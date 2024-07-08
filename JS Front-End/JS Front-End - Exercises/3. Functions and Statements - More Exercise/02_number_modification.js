function numberModification(number) {
    let strNumber = Array.from(String(number), Number)

    let averageValue = strNumber.reduce((a, b) => a + b, 0) / strNumber.length;

    while (averageValue <= 5) {
        strNumber.push(9)
        averageValue = strNumber.reduce((a, b) => a + b, 0) / strNumber.length;
    }
    console.log(strNumber.join(''));
}

//test code
// numberModification(101)
// numberModification(5835)

