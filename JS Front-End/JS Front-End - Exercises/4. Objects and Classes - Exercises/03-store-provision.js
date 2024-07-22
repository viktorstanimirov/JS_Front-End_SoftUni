function storeProvisions(stockProducts, orderedProducts) {

    function generateObject(inputArray) {
        const productsObject = {}
        for (let index = 0; index < inputArray.length; index += 2) {
            const product = inputArray[index];
            const quantity = Number(inputArray[index + 1]);

            if (!productsObject[product]) {
                productsObject[product] = 0;
            }
            productsObject[product] += quantity;
        }

        return productsObject
    }

    const instokeList = generateObject(stockProducts);
    const orderedList = generateObject(orderedProducts);

    const allProducts = structuredClone(instokeList)

    Object.keys(orderedList).forEach(productName => {
        if (!allProducts[productName]) {
            allProducts[productName] = 0
        }

        allProducts[productName] += orderedList[productName]

    });

    Object.entries(allProducts).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    });

}



//Test case:
storeProvisions(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)

// storeProvisions(
//     [
//         'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
//     ],
//     [
//         'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
//     ]
// )