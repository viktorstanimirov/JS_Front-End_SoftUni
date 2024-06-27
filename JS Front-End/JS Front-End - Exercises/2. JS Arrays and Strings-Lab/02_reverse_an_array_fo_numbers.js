function reverseArrayNumbers(n, inputArr) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(inputArr.shift())

    }

    console.log(arr.reverse().join(' '));

}


//Test code

// reverseArrayNumbers(3, [10, 20, 30, 40, 50])
// reverseArrayNumbers(4, [-1, 20, 99, 5])
// reverseArrayNumbers(2, [66, 43, 75, 89, 47])

