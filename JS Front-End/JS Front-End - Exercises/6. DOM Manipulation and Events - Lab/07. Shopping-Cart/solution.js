function solve() {
    const resultElement = document.querySelector('textarea[disabled]');
    const checkoutButton = document.querySelector('button.checkout');

    const productCatalogElement = document.querySelector('.shopping-cart');

    let allProducts = [];

    productCatalogElement.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        };

        if (e.target.textContent.trim() !== 'Add') {
            return;
        };

        const productEl = e.target.closest('.product');
        const productName = productEl.querySelector('.product-title').textContent;
        const productPrice = Number(productEl.querySelector('.product-line-price').textContent);

        resultElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

        if (!allProducts.hasOwnProperty(productName)) {
            allProducts[productName] = productPrice

        } else {
            allProducts[productName] += productPrice
        };
    });

    checkoutButton.addEventListener('click', () => {
        const totalProductsSum = Object.values(allProducts).reduce((acc, value) => acc + value, 0);
        const productNames = Object.keys(allProducts).join(', ');

        resultElement.value += `You bought ${productNames} for ${totalProductsSum.toFixed(2)}.\n`;

        document.querySelectorAll('button')
            .forEach(el => el.setAttribute('disabled', 'disabled'));
    });

}