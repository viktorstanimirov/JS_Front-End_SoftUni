function oddAndEvanSum (inputNum) {
    const inputStr = inputNum.toString();
    let oddSum = 0;
    let evenSum = 0;

    

    for(let num of inputStr) {
        let number = Number(num);
        if(num % 2 == 0) {
            evenSum += number;
        }
        else {
            oddSum += number;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}

//Test code

// console.log(oddAndEvanSum(1000435));
// console.log(oddAndEvanSum( 3495892137259234));