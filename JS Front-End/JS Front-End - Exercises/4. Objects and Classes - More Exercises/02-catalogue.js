function sortedCatalogue(inputArray) {
    let catalogue = {};

    for (const product of inputArray) {
        let [name, price] = product.split(' : ');
        price = Number(price);
        let initial = name[0].toUpperCase();

        if (!catalogue[initial]) {
            catalogue[initial] = [];
        }

        catalogue[initial].push({ name, price });
    }

    Object.keys(catalogue).sort().forEach(initial => {
        console.log(initial);

        catalogue[initial].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);

        });
    });
}

//Test code:

sortedCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
)