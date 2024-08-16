function cafeteria(input) {
    const numberOfBaristas = Number(input.shift());

    const baristas = {};

    for (let i = 0; i < numberOfBaristas; i++) {
        const [name, shift, drinks] = input.shift().split(' ');
        baristas[name] = { shift, drinks: drinks.split(',') };
    }

    input.forEach(element => {
        const [command, name, shift, drink] = element.split(' / ');

        if (command === 'Prepare') {
            if (baristas[name].shift === shift && baristas[name].drinks.includes(drink)) {
                console.log(`${name} has prepared a ${drink} for you!`);
            } else {
                console.log(`${name} is not available to prepare a ${drink}.`);
            }
        } else if (command === 'Change Shift') {
            if (baristas[name]) {
                baristas[name].shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);

            }
        } else if (command === 'Learn') {
            if (baristas[name]) {
                if (!baristas[name].drinks.includes(shift)) {
                    baristas[name].drinks.push(shift);
                    console.log(`${name} has learned a new coffee type: ${shift}.`);
                } else {
                    console.log(`${name} knows how to make ${shift}.`);
                }
            }
        }

    });
    for (const key in baristas) {
        console.log(`Barista: ${key}, Shift: ${baristas[key].shift}, Drinks: ${baristas[key].drinks.join(', ')}`);

    }

}




//Test case:

// cafeteria(
//     [
//         '3',
//         'Alice day Espresso,Cappuccino',
//         'Bob night Latte,Mocha',
//         'Carol day Americano,Mocha',
//         'Prepare / Alice / day / Espresso',
//         'Change Shift / Bob / night',
//         'Learn / Carol / Latte',
//         'Learn / Bob / Latte',
//         'Prepare / Bob / night / Latte',
//         'Closed'
//     ]);

cafeteria(
    [
        '4',
        'Alice day Espresso,Cappuccino',
        'Bob night Latte,Mocha',
        'Carol day Americano,Mocha',
        'David night Espresso',
        'Prepare / Alice / day / Espresso',
        'Change Shift / Bob / day',
        'Learn / Carol / Latte',
        'Prepare / Bob / night / Latte',
        'Learn / David / Cappuccino',
        'Prepare / Carol / day / Cappuccino',
        'Change Shift / Alice / night',
        'Learn / Bob / Mocha',
        'Prepare / David / night / Espresso',
        'Closed'
    ]);