function addAndSubtract (numOne, numTwo, numThree) {
    function sum() {
        return numOne + numTwo;
    }

    function subtract() {
        return sum() - numThree
    }

    return subtract()
}




//Test code
// console.log(addAndSubtract(23, 6, 10))
// console.log(addAndSubtract(1, 17, 30))
// console.log(addAndSubtract(42, 58, 1))