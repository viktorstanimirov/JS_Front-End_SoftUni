function simpleCalculator (num1, num2, operator) {
    let operators = {
        'multiply': (num1, num2) => num1 * num2,
        'divide': (num1, num2) => num1 / num2,
        'add': (num1, num2) => num1 + num2,
        'subtract': (num1, num2) => num1 - num2
    }

    console.log(operators[operator](num1, num2));
}


//Test code
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')