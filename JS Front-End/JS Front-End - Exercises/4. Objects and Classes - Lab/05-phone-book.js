function phoneBook(input) {
    let phoneBook = {};

    for (let entry of input) {
        let [name, phone] = entry.split(" ")

        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

//Test case:
// phoneBook(
//     [
//         'Tim 0834212554',
//         'Peter 0877547887',
//         'Bill 0896543112',
//         'Tim 0876566344'
//     ]
// )

// phoneBook(
//     ['George 0552554',
//         'Peter 087587',
//         'George 0453112',
//         'Bill 0845344'
//     ]
// )