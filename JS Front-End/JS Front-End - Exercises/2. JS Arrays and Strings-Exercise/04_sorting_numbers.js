function sortNumbers (inputArray) {
    
    let sortedNumbers = inputArray.sort((a, b) => a - b);
    let result = [];

    while(sortedNumbers.length > 0) {
        let firstNum = sortedNumbers.shift();
        let lastNum = sortedNumbers.pop()

        result.push(firstNum, lastNum)
    }
    return result;
}


//Test code
// console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))