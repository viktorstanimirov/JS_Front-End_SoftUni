function townInfo(strArray) {
    strArray.forEach(element => {
        const [town, latitude, longitude] = element.split(' | ');

        const formattedLatitude = parseFloat(latitude).toFixed(2);
        const formattedLongitude = parseFloat(longitude).toFixed(2);

        const townObject = {
            town: town,
            latitude: formattedLatitude,
            longitude: formattedLongitude

        }

        console.log(townObject);

    });
}


//Test case:
// townInfo(
//     [
//         'Sofia | 42.696552 | 23.32601',
//         'Beijing | 39.913818 | 116.363625'
//     ]
// )

// townInfo(['Plovdiv | 136.45 | 812.575'])