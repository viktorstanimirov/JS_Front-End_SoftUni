function carWash(commandsArray) {
    let carCleaned = 0

    const commands = {
        'soap': (num) => num + 10,
        'water': (num) => num * 1.20,
        'vacuum cleaner': (num) => num * 1.25,
        'mud': (num) => num * 0.90
    }

    for (let command of commandsArray) {
        carCleaned = commands[command](carCleaned)
    }

    console.log(`The car is ${carCleaned.toFixed(2)}% clean.`);
}


//Test code

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
// carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])