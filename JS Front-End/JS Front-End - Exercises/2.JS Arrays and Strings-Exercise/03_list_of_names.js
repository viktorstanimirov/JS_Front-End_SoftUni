function listOfStrings(inputArray) {

    let sortNames = inputArray.sort((a, b) => a.localeCompare(b))
    
    for (let i = 0; i <  sortNames.length; i++ ) {
        console.log(`${i+1}.${sortNames[i]}`)
    }     

}


//Test code

listOfStrings(["John", "Bob", "Christina", "Ema"])