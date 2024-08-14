window.addEventListener("load", solve);

function solve() {
    const adoptButtonEl = document.getElementById('adopt-btn');
    const animalInfo = document.getElementById('adoption-info');
    const animalList = document.getElementById('adopted-list');

    const animalTypeInput = document.getElementById('type');
    const animalAgeInput = document.getElementById('age');
    const animalGender = document.getElementById('gender');

    adoptButtonEl.addEventListener('click', (event) => {
        event.preventDefault();

        const type = animalTypeInput.value.trim();
        const age = animalAgeInput.value.trim();
        const gender = animalGender.value.trim();

        if (type === '' || age === '' || gender === '') {
            return;
        }

        const liElement = createAnimalElement(type, age, gender);

        animalInfo.appendChild(liElement);
        clearInputs();
    });

    function createAnimalElement(type, age, gender) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Pet:${type}`;


        const pGenderElement = document.createElement('p');
        pGenderElement.textContent = `Gender:${gender}`;

        const pAgeElement = document.createElement('p');
        pAgeElement.textContent = `Age:${age}`;

        console.log(type);
        console.log(gender);
        console.log(age);


        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pGenderElement);
        articleElement.appendChild(pAgeElement);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';

        const doneButton = document.createElement('button');
        doneButton.classList.add('done-btn');
        doneButton.textContent = 'Done';

        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');
        divButtons.appendChild(editButton);
        divButtons.appendChild(doneButton);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);

        editButton.addEventListener('click', () => {
            animalTypeInput.value = type;
            animalAgeInput.value = age;
            animalGender.value = gender;

            liElement.remove();
        });

        doneButton.addEventListener('click', () => {
            divButtons.remove();

            const clearButton = document.createElement('button');
            clearButton.classList.add('clear-btn');
            clearButton.textContent = 'Clear';

            clearButton.addEventListener('click', deleteAnimal);

            liElement.appendChild(clearButton);
            animalList.appendChild(liElement);
        });

        return liElement;
    }

    function clearInputs() {
        animalTypeInput.value = '';
        animalAgeInput.value = '';
        animalGender.value = '';
    }

    function deleteAnimal(e) {
        e.target.parentElement.remove();
    }
}
