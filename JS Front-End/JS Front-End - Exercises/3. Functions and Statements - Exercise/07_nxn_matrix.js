function printMatrix(number) {
    let row = Array(number).fill(number).join(' ');

    for (let i = 0; i < number; i++) {
        console.log(row);
    }
}

//Test code

printMatrix(3);
printMatrix(7);
printMatrix(2);
