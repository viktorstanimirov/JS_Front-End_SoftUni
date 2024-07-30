function colorize() {
    const tableElements = document.querySelectorAll('table tbody tr:nth-child(even)')
    console.log(tableElements);
    for (const trElement of tableElements) {
        trElement.style.backgroundColor = 'teal';
    }
}
