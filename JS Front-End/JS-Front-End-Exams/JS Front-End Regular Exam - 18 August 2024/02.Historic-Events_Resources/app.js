window.addEventListener("load", solve);

function solve() {
    const addButtonEl = document.getElementById('add-btn');
    const nameInputEl = document.getElementById('name');
    const timeInputEl = document.getElementById('time');
    const descriptionInputEl = document.getElementById('description');
    const previewListEl = document.getElementById('preview-list');
    const archiveListEl = document.getElementById('archive-list');

    addButtonEl.addEventListener('click', addEvent);

    function addEvent() {
        if (nameInputEl.value === '' || timeInputEl.value === '' || descriptionInputEl.value === '') {
            return;
        }

        const liElement = createEventElements();
        previewListEl.appendChild(liElement);

        nameInputEl.value = '';
        timeInputEl.value = '';
        descriptionInputEl.value = '';

        addButtonEl.disabled = true;
    }

    function createEventElements() {
        const pNameEl = document.createElement('p');
        pNameEl.textContent = nameInputEl.value;

        const pTimeEl = document.createElement('p');
        pTimeEl.textContent = timeInputEl.value;

        const pDescriptionEl = document.createElement('p');
        pDescriptionEl.textContent = descriptionInputEl.value;

        const articleEl = document.createElement('article');
        articleEl.appendChild(pNameEl);
        articleEl.appendChild(pTimeEl);
        articleEl.appendChild(pDescriptionEl);

        const editButtonEl = document.createElement('button');
        editButtonEl.textContent = 'Edit';
        editButtonEl.className = 'edit-btn';

        const nextButtonEl = document.createElement('button');
        nextButtonEl.textContent = 'Next';
        nextButtonEl.className = 'next-btn';

        const divEl = document.createElement('div');
        divEl.className = 'buttons';
        divEl.appendChild(editButtonEl);
        divEl.appendChild(nextButtonEl);

        const liElement = document.createElement('li');
        liElement.appendChild(articleEl);
        liElement.appendChild(divEl);

        editButtonEl.addEventListener('click', () => {
            nameInputEl.value = pNameEl.textContent.replace('Name: ', '');
            timeInputEl.value = pTimeEl.textContent.replace('Time: ', '');
            descriptionInputEl.value = pDescriptionEl.textContent.replace('Description: ', '');

            liElement.remove();
            addButtonEl.disabled = false;
        });

        nextButtonEl.addEventListener('click', () => {
            editButtonEl.remove();
            nextButtonEl.remove();


            const archiveButtonEl = document.createElement('button');
            archiveButtonEl.textContent = 'Archive';
            archiveButtonEl.className = 'archive-btn';
            liElement.appendChild(archiveButtonEl);

            liElement.remove();
            archiveListEl.appendChild(liElement);

        });

        archiveListEl.addEventListener('click', (e) => {
            archiveListEl.remove();
            addButtonEl.disabled = false;

        });

        return liElement;
    }
}

