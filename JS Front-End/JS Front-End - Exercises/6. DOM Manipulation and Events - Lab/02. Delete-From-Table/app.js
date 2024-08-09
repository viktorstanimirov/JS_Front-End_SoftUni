function deleteByEmail() {
    const inputEmail = document.querySelector('input[name="email"]').value;

    const tableBody = document.querySelector('#customers tbody');

    let isFound = false;

    for (let row of tableBody.rows) {
        let email = row.cells[1].textContent;
        if (email === inputEmail) {
            tableBody.deleteRow(row.rowIndex - 1);
            isFound = true;
            break;
        }

        const resultEl = document.querySelector('#result');
        if (isFound) {
            resultEl.textContent = 'Deleted.';
        } else {
            resultEl.textContent = 'Not found.';
        }
    }
}
