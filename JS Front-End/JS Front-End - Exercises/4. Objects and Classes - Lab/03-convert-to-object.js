function convertToObject(jsonInput) {
    let data = JSON.parse(jsonInput)

    Object.keys(data).forEach(key => { console.log(`${key}: ${data[key]}`); })
}


//Test case:

// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
// convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')