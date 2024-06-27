function sameNumbers (number) {
    let strNumber = number.toString()
    let digitsList = strNumber.split('')

    let equal = true
    let currSymbol = 0

    for(let i = 1; i <  digitsList.length; i++) {
        let digit = digitsList[i]

        if(digit !== digitsList[currSymbol])
            equal = false
            currSymbol += 1
    }
    
    console.log(equal);

    totalSum = 0
    for(let digit of digitsList) {
        totalSum += Number(digit)
    }
    
    console.log(totalSum);
}
        


//Test case
// sameNumbers(2222222)
// sameNumbers(1234)