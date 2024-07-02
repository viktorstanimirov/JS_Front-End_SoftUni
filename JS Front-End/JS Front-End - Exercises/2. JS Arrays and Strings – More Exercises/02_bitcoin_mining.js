function bitcoinMining(inputNumbers) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let dayOfPurchased = 0;
    let bitcoinAmount = 0;
    let totalMoney = 0;
    let daysCount = 0;

    while(inputNumbers.length > 0) {
        daysCount += 1;
        let minedGold = inputNumbers.shift();
        
        if (daysCount % 3 == 0) {
            minedGold *= 0.70
            totalMoney += minedGold * goldPrice;
        } else {
            totalMoney += minedGold * goldPrice;
        }

        if (totalMoney >= bitcoinPrice) {
            while(totalMoney >= bitcoinPrice){
            totalMoney -= bitcoinPrice;
            bitcoinAmount +=1;
            
            if (bitcoinAmount == 1){
                dayOfPurchased = daysCount
            }
        }
    }

    }
    console.log( `Bought bitcoins: ${bitcoinAmount}`);
    if (bitcoinAmount >= 1){
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchased}`);
    }

    console.log(  `Left money: ${totalMoney.toFixed(2)} lv.`);
   
}



//Test code
// bitcoinMining([100, 200, 300])
// bitcoinMining([50, 100])
// bitcoinMining([3124.15, 504.212, 2511.124])