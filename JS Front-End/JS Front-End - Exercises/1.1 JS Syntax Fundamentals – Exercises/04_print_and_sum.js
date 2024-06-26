function printAndSum (num1, num2) {
    let result = 0;
    let numbers = []

    for (let i = num1; i <= num2; i++) {
        result += i
        numbers.push(i)
       
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${result}`);
}


//Test case
// printAndSum(5, 10)
// printAndSum(0, 26)
// printAndSum(50, 60)