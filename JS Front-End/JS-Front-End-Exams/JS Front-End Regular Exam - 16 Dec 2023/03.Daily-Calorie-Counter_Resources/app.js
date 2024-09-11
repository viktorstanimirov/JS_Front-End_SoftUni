const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

const loadButtonEl = document.getElementById('load-meals');
const addMealButtonEl = document.getElementById('add-meal');
const editMealButtonEl = document.getElementById('edit-meal');

const divMealEl = document.getElementById('list');
const foodFormInput = document.getElementById('food');
const timeFormInput = document.getElementById('time');
const caloriesFormInput = document.getElementById('calories');

let currentMealId = null;

loadButtonEl.addEventListener('click', loadMealsHandler);
addMealButtonEl.addEventListener('click', addMealsHandler);
editMealButtonEl.addEventListener('click', editMealHandler);

async function addMealsHandler() {
    const newMeal = {
        food: foodFormInput.value,
        time: timeFormInput.value,
        calories: caloriesFormInput.value
    };

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMeal)
    });

    clearInputFields();
    loadMealsHandler();
}

async function loadMealsHandler() {
    const res = await fetch(BASE_URL);
    const response = await res.json();

    divMealEl.innerHTML = '';

    Object.values(response).forEach(meal => {
        const divMealsListElements = document.createElement('div');
        divMealsListElements.className = 'meal';
        divMealsListElements.id = meal._id;
        const h2FoodEl = document.createElement('h2');
        h2FoodEl.textContent = meal.food;

        const h3CaloriesEl = document.createElement('h3');
        h3CaloriesEl.textContent = `${meal.calories} calories`;

        const h3TimeEl = document.createElement('h3');
        h3TimeEl.textContent = meal.time;

        const divMealButtonsElements = document.createElement('div');
        divMealButtonsElements.id = 'meal-buttons';

        const changeMealButton = document.createElement('button');
        changeMealButton.className = 'change-meal';
        changeMealButton.textContent = 'Change';

        const deleteMealButton = document.createElement('button');
        deleteMealButton.className = 'delete-meal';
        deleteMealButton.textContent = 'Delete';

        divMealButtonsElements.appendChild(changeMealButton);
        divMealButtonsElements.appendChild(deleteMealButton);

        divMealsListElements.appendChild(h2FoodEl);
        divMealsListElements.appendChild(h3CaloriesEl);
        divMealsListElements.appendChild(h3TimeEl);
        divMealsListElements.appendChild(divMealButtonsElements);

        divMealEl.appendChild(divMealsListElements);

        changeMealButton.addEventListener('click', () => changeMealHandler(meal._id, meal));
        deleteMealButton.addEventListener('click', () => deleteMealHandler(meal._id));
    });
}

function changeMealHandler(mealId, meal) {
    foodFormInput.value = meal.food;
    timeFormInput.value = meal.time;
    caloriesFormInput.value = meal.calories;

    currentMealId = mealId;

    editMealButtonEl.disabled = false;
    addMealButtonEl.disabled = true;
}

async function editMealHandler() {
    if (!currentMealId) {
        console.error('No meal selected for editing');
        return;
    }

    const updatedMeal = {
        food: foodFormInput.value,
        time: timeFormInput.value,
        calories: caloriesFormInput.value
    };

    await fetch(`${BASE_URL}/${currentMealId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMeal)
    });

    clearInputFields();
    loadMealsHandler();
    editMealButtonEl.disabled = true;
    addMealButtonEl.disabled = false;
    currentMealId = null;
}

async function deleteMealHandler(mealId) {
    try {
        await fetch(`${BASE_URL}/${mealId}`, {
            method: 'DELETE',
        });

        const mealElement = document.getElementById(mealId);
        if (mealElement) mealElement.remove();
    } catch (error) {
        console.error('Error deleting meal:', error);
    }
}

function clearInputFields() {
    foodFormInput.value = '';
    timeFormInput.value = '';
    caloriesFormInput.value = '';
}
