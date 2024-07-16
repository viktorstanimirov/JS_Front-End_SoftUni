function convertToJson(firstName, lastName, hairColor) {
    let personInfo = {
        "name": firstName,
        lastName,
        hairColor
    }
    // let result = JSON.stringify(personInfo, null, 2) //**For bether print in terminal */
    let result = JSON.stringify(personInfo)
    console.log(result);
}


//Test case:
// convertToJson('George', 'Jones', 'Brown')
// convertToJson('Peter', 'Smith', 'Blond')
