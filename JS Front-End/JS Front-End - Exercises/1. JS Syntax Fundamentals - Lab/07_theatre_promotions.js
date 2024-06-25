function theatrePromotions(weekDay, age) {
    let ticketPrice;

    switch (weekDay) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
            } else if (18 < age && age <= 64) {
                ticketPrice = 18
            } else if (64 <= age && age <= 122) {
                ticketPrice = 12
            } else {
                ticketPrice = 'Error!'
            }
            break;

        case 'Weekend':
            if (0 <= age && age <= 18) {
                ticketPrice = 15;
            } else if (18 < age && age <= 64) {
                ticketPrice = 20
            } else if (64 <= age && age <= 122) {
                ticketPrice = 15
            } else {
                ticketPrice = 'Error!'
            }
            break;

        case 'Holiday':
            if (0 <= age && age <= 18) {
                ticketPrice = 5;
            } else if (18 < age && age <= 64) {
                ticketPrice = 12
            } else if (64 <= age && age <= 122) {
                ticketPrice = 10
            } else {
                ticketPrice = 'Error!'
            }
            break;

    } if (ticketPrice !== 'Error!') {
        ticketPrice = `${ticketPrice}$`
    }

    console.log(ticketPrice);
}

//Test code
// theatrePromotions('Weekday', 42)
// theatrePromotions('Holiday', -12)
// theatrePromotions('Holiday', 15)