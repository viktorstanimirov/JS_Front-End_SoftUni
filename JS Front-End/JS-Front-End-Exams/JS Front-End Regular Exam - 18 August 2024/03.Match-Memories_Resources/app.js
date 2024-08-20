const BASE_URL = 'http://localhost:3030/jsonstore/matches/';
const loadMatchesButton = document.getElementById('load-matches');
const addMatchButton = document.getElementById('add-match');
const editButtonEl = document.getElementById('edit-match');
const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');
const listEl = document.getElementById('list');

let currentMatchId = null;

// Event Listeners
loadMatchesButton.addEventListener('click', loadMatches);
addMatchButton.addEventListener('click', addMatch);
editButtonEl.addEventListener('click', editMatch);

async function loadMatches() {
    const response = await fetch(BASE_URL);


    const data = await response.json();
    listEl.innerHTML = '';

    Object.values(data).forEach(match => {
        const matchElement = createMatchElement(match);
        listEl.appendChild(matchElement);
    });

    editButtonEl.disabled = true;
    addMatchButton.disabled = false;
}

async function addMatch() {
    const host = hostInput.value.trim();
    const score = scoreInput.value.trim();
    const guest = guestInput.value.trim();


    const newMatch = {
        host,
        score,
        guest
    };

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMatch)
    });

    if (!response.ok) {
        console.error('Failed to add match:', response.statusText);
        return;
    }

    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';

    loadMatches();
}

function createMatchElement(match) {
    const { host, score, guest, _id } = match;

    const pHostEl = document.createElement('p');
    pHostEl.textContent = host;

    const pScoreEl = document.createElement('p');
    pScoreEl.textContent = score;

    const pGuestEl = document.createElement('p');
    pGuestEl.textContent = guest;

    const infoDivEl = document.createElement('div');
    infoDivEl.className = 'info';
    infoDivEl.appendChild(pHostEl);
    infoDivEl.appendChild(pScoreEl);
    infoDivEl.appendChild(pGuestEl);

    const changeButtonEl = document.createElement('button');
    changeButtonEl.textContent = 'Change';
    changeButtonEl.className = 'change-btn';
    changeButtonEl.addEventListener('click', () => populateInputFields(match));

    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.textContent = 'Delete';
    deleteButtonEl.className = 'delete-btn';
    deleteButtonEl.addEventListener('click', () => deleteMatch(_id));

    const btnWrapperDivEl = document.createElement('div');
    btnWrapperDivEl.className = 'btn-wrapper';
    btnWrapperDivEl.appendChild(changeButtonEl);
    btnWrapperDivEl.appendChild(deleteButtonEl);

    const liElement = document.createElement('li');
    liElement.className = 'match';
    liElement.appendChild(infoDivEl);
    liElement.appendChild(btnWrapperDivEl);

    return liElement;
}

function populateInputFields(match) {
    const { host, score, guest, _id } = match;

    hostInput.value = host;
    scoreInput.value = score;
    guestInput.value = guest;

    currentMatchId = _id;

    editButtonEl.disabled = false;
    addMatchButton.disabled = true;
}

async function editMatch() {

    const host = hostInput.value.trim();
    const score = scoreInput.value.trim();
    const guest = guestInput.value.trim();


    const editedMatch = {
        host,
        score,
        guest
    };

    const response = await fetch(`${BASE_URL}${currentMatchId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedMatch)
    });


    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';

    currentMatchId = null;

    loadMatches();

    editButtonEl.disabled = true;
    addMatchButton.disabled = false;
}

async function deleteMatch(id) {
    const response = await fetch(`${BASE_URL}${id}`, {
        method: 'DELETE'
    });

    loadMatches();
}
