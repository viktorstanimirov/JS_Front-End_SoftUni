const BASE_URL = 'http://localhost:3030/jsonstore/records/';

const loadRecordButtonEl = document.getElementById('load-records');
const recordListElement = document.getElementById('list');

const addRecordButtonEl = document.getElementById('add-record');
const editRecordButtonEl = document.getElementById('edit-record');

const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

let currentEditId = null;

loadRecordButtonEl.addEventListener("click", loadRecordsHandler);
addRecordButtonEl.addEventListener("click", addRecordsHandler);
editRecordButtonEl.addEventListener("click", editRecordHandler);

async function loadRecordsHandler() {
    recordListElement.innerHTML = '';

    try {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        const records = Object.values(result);

        records.forEach(data => {
            const recordElement = createRecordElement(data.name, data.steps, data.calories, data._id);
            recordListElement.appendChild(recordElement);
        });
    } catch (error) {
        console.error("Failed to load records:", error);
    }
}

function createRecordElement(name, steps, calories, recordId) {
    const pNameElement = document.createElement('p');
    pNameElement.textContent = name;

    const pStepsElement = document.createElement('p');
    pStepsElement.textContent = steps;

    const pCaloriesElement = document.createElement('p');
    pCaloriesElement.textContent = calories;

    const divContentElement = document.createElement('div');
    divContentElement.classList.add('info');
    divContentElement.appendChild(pNameElement);
    divContentElement.appendChild(pStepsElement);
    divContentElement.appendChild(pCaloriesElement);

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    changeButton.addEventListener("click", () => populateInputFields(name, steps, calories, recordId));

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", () => deleteRecordHandler(recordId));

    const divButtons = document.createElement('div');
    divButtons.classList.add('btn-wrapper');
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    const liRecordElement = document.createElement('li');
    liRecordElement.classList.add('record');
    liRecordElement.appendChild(divContentElement);
    liRecordElement.appendChild(divButtons);

    return liRecordElement;
}

async function addRecordsHandler() {
    const record = {
        name: nameInput.value,
        steps: stepsInput.value,
        calories: caloriesInput.value
    };

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    });

    clearInputFields();
    loadRecordsHandler();
}

function clearInputFields() {
    nameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';
}

function populateInputFields(name, steps, calories, recordId) {
    nameInput.value = name;
    stepsInput.value = steps;
    caloriesInput.value = calories;
    currentEditId = recordId;

    editRecordButtonEl.disabled = false;
    addRecordButtonEl.disabled = true;
}

async function editRecordHandler() {
    const updatedRecord = {
        name: nameInput.value,
        steps: stepsInput.value,
        calories: caloriesInput.value
    };

    const response = await fetch(`${BASE_URL}${currentEditId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecord)
    });

    if (response.ok) {
        loadRecordsHandler();
        clearInputFields();

        editRecordButtonEl.disabled = true;
        addRecordButtonEl.disabled = false;
        currentEditId = null;
    } else {
        console.error("Failed to update the record");
    }
}

async function deleteRecordHandler(recordId) {
    const response = await fetch(`${BASE_URL}${recordId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        loadRecordsHandler();
    } else {
        console.error("Failed to delete the record");
    }
}
