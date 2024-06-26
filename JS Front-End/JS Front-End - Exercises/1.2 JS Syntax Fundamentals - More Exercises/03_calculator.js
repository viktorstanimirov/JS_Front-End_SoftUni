function simpleCalculator (num1, operator, num2) {
    let operators = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '/': (num1, num2) => num1 / num2,
        '*': (num1, num2) => num1 * num2
    }

    console.log(operators[operator](num1, num2).toFixed(2));
}

//Test code

// simpleCalculator(5, '+', 10)
// simpleCalculator(25.5, '-', 3)