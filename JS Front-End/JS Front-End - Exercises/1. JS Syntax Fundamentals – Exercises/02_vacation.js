function vacationPrice(groupCount, groupType, days) {
    let totalPrice;

    switch(groupType) {
        case 'Students':
            if (days == 'Friday') {
                totalPrice = groupCount * 8.45
            } else if (days == 'Saturday') {
                totalPrice = groupCount * 9.80
            } else if (days == 'Sunday') {
                totalPrice = groupCount * 10.46
            }          
            if (groupCount >= 30) {
                totalPrice -= totalPrice *0.15
            }
            break;

        case 'Business':
            if (groupCount >= 100) {
                groupCount -= 10
            }

            if (days == 'Friday') {
                totalPrice = groupCount * 10.90
            } else if (days == 'Saturday') {
                totalPrice = groupCount * 15.60
            } else if (days == 'Sunday') {
                totalPrice = groupCount * 16
            }

            break;
        case 'Regular':
            if (days == 'Friday') {
                totalPrice = groupCount * 15
            } else if (days == 'Saturday') {
                totalPrice = groupCount * 20
            } else if (days == 'Sunday') {
                totalPrice = groupCount * 22.50
            }
            if (groupCount >= 10 && groupCount <=20) {
                totalPrice -= totalPrice *0.05
            }
            break;
           
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


//Test case
// vacationPrice(30, "Students", "Sunday")
// vacationPrice(40, "Regular", "Saturday")