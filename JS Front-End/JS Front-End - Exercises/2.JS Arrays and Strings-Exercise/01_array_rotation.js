function arrayRotation(array, rotationCount) {

        let output = array;

    for (let i = 1; i <= rotationCount; i++) {
        let rotate = output.shift();
        output.push(rotate);
       
    }

    console.log(array.join(' '));
}


//Test code
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)