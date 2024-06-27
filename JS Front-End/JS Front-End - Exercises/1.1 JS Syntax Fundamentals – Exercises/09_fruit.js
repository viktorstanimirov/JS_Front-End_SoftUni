function fruitPrice (fruit, weight, price) {
    let weighInKg = weight / 1000 ;
    let totalPrice = (weighInKg * price);
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weighInKg.toFixed(2)} kilograms ${fruit}.`);
}

//Test case
// fruitPrice('orange', 2500, 1.80)
// fruitPrice('apple', 1563, 2.35)