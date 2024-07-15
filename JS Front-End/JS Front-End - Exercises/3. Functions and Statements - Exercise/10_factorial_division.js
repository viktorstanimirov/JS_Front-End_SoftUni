function factorialDivision(numberOne, numberTwo) {
    function factorial(number) {
        let result = 1;
        for (let index = 1; index <= number; index++) {
            result *= index;
        }
        return result;
    }

    const factorialOne = factorial(numberOne);
    const factorialTwo = factorial(numberTwo);
    const result = factorialOne / factorialTwo;

    console.log(result.toFixed(2));
}


//Test code
// factorialDivision(5, 2)
// factorialDivision(6, 2)



