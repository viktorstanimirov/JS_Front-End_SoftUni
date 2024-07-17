function employees(inputArray) {
    let employees = [];

    inputArray.forEach(name => {
        let personalNumber = name.length;
        employees.push({ name: name, personalNumber: personalNumber });
    });

    employees.forEach(employee => {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);

    });

}





//Test code:
// employees(
//     [
//         'Silas Butler',
//         'Adnaan Buckley',
//         'Juan Peterson',
//         'Brendan Villarreal'
//     ]
// )

// employees(
//     [
//         'Samuel Jackson',
//         'Will Smith',
//         'Bruce Willis',
//         'Tom Holland'
//     ]
// )