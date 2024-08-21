window.addEventListener("load", solve);

function solve() {
    const addButtonEl = document.getElementById('add-btn');
    const deleteButtonEl = document.querySelector('.btn.delete');

    if (!deleteButtonEl) {
        console.error('Delete button not found in the DOM');
        return;
    }

    const expenseInputEl = document.getElementById('expense');
    const amountInputEl = document.getElementById('amount');
    const dateInputEl = document.getElementById('date');
    const previewListEl = document.getElementById('preview-list');
    const expenseListEl = document.getElementById('expenses-list');

    addButtonEl.addEventListener('click', addExpenseHandler);

    deleteButtonEl.addEventListener('click', deleteAllExpensesHandler);

    function clearInput() {
        expenseInputEl.value = '';
        amountInputEl.value = '';
        dateInputEl.value = '';
    }

    function addExpenseHandler() {
        if (expenseInputEl.value === '' || amountInputEl.value === '' || dateInputEl.value === '') {
            return;
        }

        const liElement = createExpenseHandler();
        previewListEl.appendChild(liElement);

        clearInput();
        addButtonEl.disabled = true;
    }

    function createExpenseHandler() {
        const pExpenseEl = document.createElement('p');
        pExpenseEl.textContent = `Type: ${expenseInputEl.value}`;

        const pAmountEl = document.createElement('p');
        pAmountEl.textContent = `Amount: ${amountInputEl.value}`;

        const pDateEl = document.createElement('p');
        pDateEl.textContent = `Date: ${dateInputEl.value}`;

        const articleEl = document.createElement('article');
        articleEl.appendChild(pExpenseEl);
        articleEl.appendChild(pAmountEl);
        articleEl.appendChild(pDateEl);

        const editButtonEl = document.createElement('button');
        editButtonEl.classList.add('btn-edit');
        editButtonEl.textContent = 'Edit';

        const okButtonEl = document.createElement('button');
        okButtonEl.classList.add('btn-ok');
        okButtonEl.textContent = 'Ok';

        const divEl = document.createElement('div');
        divEl.classList.add('buttons');
        divEl.appendChild(editButtonEl);
        divEl.appendChild(okButtonEl);

        const liElement = document.createElement('li');
        liElement.appendChild(articleEl);
        liElement.appendChild(divEl);

        editButtonEl.addEventListener('click', () => {
            expenseInputEl.value = pExpenseEl.textContent.replace('Type: ', '');
            amountInputEl.value = pAmountEl.textContent.replace('Amount: ', '');
            dateInputEl.value = pDateEl.textContent.replace('Date: ', '');

            liElement.remove();
            addButtonEl.disabled = false;
        });

        okButtonEl.addEventListener('click', () => {
            addButtonEl.disabled = false;
            editButtonEl.remove();
            okButtonEl.remove();
            previewListEl.removeChild(liElement);
            expenseListEl.appendChild(liElement);
        });

        return liElement;
    }

    function deleteAllExpensesHandler() {
        expenseListEl.innerHTML = '';
    }
}
