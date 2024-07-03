function smallestNumber (numOne, numTwo, numThree) {
    const allNumbers = [numOne, numTwo, numThree];
    let minNumber = Number.MAX_SAFE_INTEGER;
    
    for (let num of allNumbers) {
        if (num < minNumber){
            minNumber = num;
        }
    }
    console.log(minNumber);
}



// Test code
// smallestNumber(2, 5, 3)
// smallestNumber(600, 342, 123)
// smallestNumber(25, 21, 4)
// smallestNumber(2, 2, 2)