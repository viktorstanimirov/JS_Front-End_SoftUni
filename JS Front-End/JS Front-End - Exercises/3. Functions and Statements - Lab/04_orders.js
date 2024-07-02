function orders (product, quantity) {
    const products = {
    'coffee' : 1.50,
    'water' : 1.00,
    'coke' : 1.40,
    'snacks' : 2.00
}
    let result = products[product] * quantity
    console.log(result.toFixed(2));

}

//Test code
orders("water", 5)
orders("coffee", 2)