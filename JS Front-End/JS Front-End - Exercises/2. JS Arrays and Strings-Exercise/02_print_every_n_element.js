function everyNthElement (inputArray, step) {

        output = []
    
        for (let index = 0; index < inputArray.length; index++) {
            if (index % step === 0){
                output.push(inputArray[index])
            }
        }
    
        return output;
    }



//Test code
// console.log(everyNthElement(['5', '20', '31', '4', '20'], 2))
// everyNthElement(['dsa', 'asd', 'test', 'tset'], 2)
// everyNthElement(['1', '2','3', '4', '5'], 6)