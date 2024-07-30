function flightSchedule(input) {
    const [flights, statusUpdate, [statusToCheck]] = input;

    const flightsInfo = {};

    flights.forEach(element => {
        const [code, ...destinationArr] = element.split(' ');
        const destination = destinationArr.join(' ');
        flightsInfo[code] = { Destination: destination, Status: 'Ready to fly' };
    });

    statusUpdate.forEach(element => {
        const [code, newStatus] = element.split(' ');

        if (flightsInfo[code]) {
            flightsInfo[code].Status = newStatus;
        }
    });

    const result = Object.values(flightsInfo).filter(flight => {
        if (statusToCheck === 'Ready to fly') {
            return flight.Status === 'Ready to fly';
        } else {
            return flight.Status === statusToCheck;

        }
    }
    )
    result.forEach(flight => {
        console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`);
    });
}

//Test case:

// flightSchedule(
//     [['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'],
//     ['Cancelled']
//     ]
// )
flightSchedule(
    [['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],
    ['Ready to fly']
    ]
)