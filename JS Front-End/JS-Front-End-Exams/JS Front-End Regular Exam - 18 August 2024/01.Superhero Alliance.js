function superheroAlliance(input) {
    const numberOfHeroes = Number(input.shift());
    const heroes = {};

    for (let i = 0; i < numberOfHeroes; i++) {
        const [name, powers, energy] = input.shift().split('-');
        heroes[name] = {
            powers: powers.split(','),
            energy: Number(energy)
        };
    }

    input.forEach(element => {
        const [command, name, powerOrEnergy, value] = element.split(' * ');

        if (command === 'Use Power' && heroes[name]) {
            const energyNeeded = Number(value);
            if (heroes[name].powers.includes(powerOrEnergy) && heroes[name].energy >= energyNeeded) {
                heroes[name].energy -= energyNeeded;
                console.log(`${name} has used ${powerOrEnergy} and now has ${heroes[name].energy} energy!`);
            } else {
                console.log(`${name} is unable to use ${powerOrEnergy} or lacks energy!`);
            }
        } else if (command === 'Train' && heroes[name]) {
            let energyGained = Number(powerOrEnergy);

            if (heroes[name].energy === 100) {
                console.log(`${name} is already at full energy!`);
            } else {
                heroes[name].energy += energyGained;
                if (heroes[name].energy > 100) {
                    energyGained -= (heroes[name].energy - 100);
                    heroes[name].energy = 100;
                }
                console.log(`${name} has trained and gained ${energyGained} energy!`);
            }
        } else if (command === 'Learn' && heroes[name]) {
            const newPower = powerOrEnergy;
            if (!heroes[name].powers.includes(newPower)) {
                heroes[name].powers.push(newPower);
                console.log(`${name} has learned ${newPower}!`);
            } else {
                console.log(`${name} already knows ${newPower}.`);
            }
        }
    });

    for (const hero in heroes) {
        console.log(`Superhero: ${hero}`);
        console.log(`- Superpowers: ${heroes[hero].powers.join(', ')}`);
        console.log(`- Energy: ${heroes[hero].energy}`);
    }
}


// Test case:
// superheroAlliance(
//     [
//         "3",
//         "Iron Man-Repulsor Beams,Flight-80",
//         "Thor-Lightning Strike,Hammer Throw-10",
//         "Hulk-Super Strength-60",
//         "Use Power * Iron Man * Flight * 30",
//         "Train * Thor * 20",
//         "Train * Hulk * 50",
//         "Learn * Hulk * Thunderclap",
//         "Use Power * Hulk * Thunderclap * 70",
//         "Evil Defeated!"
//     ]
// );

// superheroAlliance(
//     (
//         [
//             "2",
//             "Iron Man-Repulsor Beams,Flight-20",
//             "Thor-Lightning Strike,Hammer Throw-100",
//             "Train * Thor * 20",
//             "Use Power * Iron Man * Repulsor Beams * 30",
//             "Evil Defeated!"
//         ])
// )
