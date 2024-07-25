function parkingLot(strArray) {
    let carList = [];
    strArray.forEach(element => {
        const [command, carPlate] = element.split(", ")

        switch (command) {
            case 'IN':
                if (carList.includes(carPlate)) {
                    return;
                } else {
                    carList.push(carPlate)
                    break;
                }

            case 'OUT':
                if (carList.includes(carPlate)) {
                    carList = carList.filter(car => car !== carPlate);
                }
                break;
        }
    });
    if (carList.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        carList.sort((a, b) => a.localeCompare(b)).forEach(car => {
            console.log(`${car}`);

        });
    }

}

//Test case:

// parkingLot(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'IN, CA9999TT',
//         'IN, CA2866HI',
//         'OUT, CA1234TA',
//         'IN, CA2844AA',
//         'OUT, CA2866HI',
//         'IN, CA9876HH',
//         'IN, CA2822UU'
//     ]
// )

// parkingLot(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'OUT, CA1234TA'
//     ]
// )