function spellbookUnraveling(inputArray) {
    let spellName = inputArray.shift();

    for (const command of inputArray) {
        if (command === 'RemoveEven') {
            let newSpellName = '';
            for (let index = 0; index < spellName.length; index++) {
                if (index % 2 === 0) {
                    newSpellName += spellName[index];
                }
            }
            spellName = newSpellName;
            console.log(spellName);

        } else if (command.startsWith('TakePart!')) {
            const parts = command.split('!');
            const fromIndex = parseInt(parts[1], 10);
            const toIndex = parseInt(parts[2], 10);

            let result = spellName.slice(fromIndex, toIndex);
            spellName = result;
            console.log(spellName);

        } else if (command.startsWith('Reverse!')) {
            const reverseString = command.split('!')[1];
            const index = spellName.indexOf(reverseString);

            if (index !== -1) {
                spellName =
                    spellName.slice(0, index) + spellName.slice(index + reverseString.length);

                const reversedSubstring = reverseString.split('').reverse().join('');

                spellName += reversedSubstring;

                console.log(spellName);
            } else {
                console.log('Error');

            }
        } else if (command === 'End') {
            console.log(`The concealed spell is: ${spellName}`);
        }
    }
}


//Test case:
// spellbookUnraveling(
//     (
//         ["asAsl2adkda2mdaczsa",
//             "RemoveEven",
//             "TakePart!1!9",
//             "Reverse!maz",
//             "End"
//         ]
//     )
// )

spellbookUnraveling(
    (
        ["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
            "TakePart!31!42",
            "RemoveEven",
            "Reverse!anim",
            "Reverse!sad",
            "End"
        ]
    )
)