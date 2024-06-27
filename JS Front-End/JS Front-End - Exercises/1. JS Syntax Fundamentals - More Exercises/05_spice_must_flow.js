function spiceToExtract(input) {
    const consumption = 26
    let yieldAmount = input
    let daysWorked = 0
    let extractedSpice = 0

    while (yieldAmount >= 100) {
        extractedSpice += (yieldAmount - consumption)
        yieldAmount -= 10
        daysWorked += 1


        if (yieldAmount < 100) {
            extractedSpice -= Math.min(input, consumption);
            break;

        }
    }

    console.log(`${daysWorked}`);
    console.log(`${extractedSpice}`);
}


//Test code
spiceToExtract(111)
spiceToExtract(450)


