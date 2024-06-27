function sumDigits(num) {
    let strNum = num.toString();
    let sum = 0 ;

    for (digit of strNum) {
        sum += Number(digit)
    }
    console.log(`${sum}`);
}

//Test case
// sumDigits(245678)
// sumDigits(97561)
// sumDigits(543)