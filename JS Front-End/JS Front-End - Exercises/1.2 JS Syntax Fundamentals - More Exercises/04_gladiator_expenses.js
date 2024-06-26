function gladiatorExpenses(losts, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let fightNum = 0

    let helmet = 0
    let sword = 0
    let shield = 0
    let armor = 0

    for (let i=1; i < losts + 1; i++) {
        fightNum += 1

        if (i % 2 === 0 && i % 3 === 0) {
            shield += 1

            if (shield % 2 === 0) {
                armor += 1
            }
        }

        if (i % 2 === 0) {
            helmet += 1
        }

        if (i % 3 === 0) {
            sword += 1
        }
    }

    let expenses = (helmet * helmetPrice) + (sword * swordPrice) + (shield * shieldPrice) + (armor * armorPrice)

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    }

    


//Test code
// gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)