// Variables
const mealsEl = document.getElementById('meals');
const favoriteContainer = document.getElementById('fav-meals');
const searchTern = document.getElementById('search-tern');
const searchBtn = document.getElementById('search');
const mealPopup = document.getElementById('popup-container');
const popupCloseBtn = document.getElementById('close-popup');
const mealInfoEl = document.getElementById('meal-info');

getRandomMeal();
fetchFavMeals();

// Function for fetching API
async function getRandomMeal() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

    const respData = await resp.json();
    const randomMeal = await respData.meals[0];

    console.log(randomMeal);

    addMeal(randomMeal, true);
};

async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal

};

async function getMealsBySearch(tern) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + tern);

    const respData = await resp.json();
    const meals = await respData.meals;

    return meals;
};

// Fetch favorite meals from localshorage
async function fetchFavMeals() {
    // Clear the container
    favoriteContainer.innerHTML = '';
    const mealIds = getMealIsLS();

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        meal = await getMealById(mealId);

        addMealToFavorite(meal);
    };

};


// Function
function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    // Load random recipe data
    meal.innerHTML = `         
        <div class="meal-header">
            ${random 
                ? `<span class="random">Random Recipe</span>` 
                : ''}
            <img 
                class="random-img"
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}">
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fa fa-heart"></i>
            </button>
        </div>
    `;

    const btn = meal.querySelector('.meal-body .fav-btn');
    const randomImg = meal.querySelector('.random-img');

    // Click 'HEART' event
    meal.querySelector('.meal-body .fav-btn').addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            removeMealLS(mealData.idMeal)
            btn.classList.remove('active');
        } else {
            addMealLS(mealData.idMeal)
            btn.classList.add('active');
        }


        fetchFavMeals();
    });

    // Show clicked meal infomation
    randomImg.addEventListener('click', () => {
        showMealInfo(mealData);
    })

    mealsEl.appendChild(meal);
};


// Get localStorage ID data
function addMealLS(mealId) {
    const mealIds = getMealIsLS();

    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
};

function removeMealLS(mealId) {
    const mealIds = getMealIsLS();

    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)));
};

function getMealIsLS() {
    const mealIds = JSON.parse(localStorage.getItem('mealIds'))

    return mealIds === null ? [] : mealIds;
};



// Add favorite meal on screen
function addMealToFavorite(mealData) {
    const favoriteMeal = document.createElement('li');

    favoriteMeal.innerHTML = `         
        <img 
            class="fav-img"
            src="${mealData.strMealThumb}" 
            alt="${mealData.strMeal}">
        <span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    `;
    const clearBtn = favoriteMeal.querySelector('.clear');
    const favoriteImg = favoriteMeal.querySelector('.fav-img')

    clearBtn.addEventListener('click', () => {
        removeMealLS(mealData.idMeal);

        fetchFavMeals();
    })

    favoriteImg.addEventListener('click', () => {
        showMealInfo(mealData);
    })

    favoriteContainer.appendChild(favoriteMeal);
};


function showMealInfo(mealData) {
    // Clear it up
    mealInfoEl.innerHTML = '';
    //update the meal info
    const mealEl = document.createElement('div');

    const ingredients = [];
    // Get ingredients and measures
    for (let i = 1; i < 20; i++) {
        if (mealData['strIngredient' + i]) {
            ingredients.push(`
            ${mealData['strIngredient' + i]} 
            / ${mealData['strMeasure'+ i]}
            `)
        } else {
            break;
        };
    }

    mealEl.innerHTML = `
        <h1>${mealData.strMeal}</h1>
        <img src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}">
        <p class="info-text">
            ${mealData.strInstructions}
        </p>

        <h3>Ingriendents:</h3>
        <ul class="ingriendent">
            ${ingredients.map(ing => `
            <li>${ing}</li>
            `).join('')}
        </ul>

    `;

    mealInfoEl.appendChild(mealEl);
    // Show the popup
    mealPopup.classList.remove('hidden');
};




// EventListener
searchBtn.addEventListener('click', async () => {
    mealsEl.innerHTML = '';

    const search = searchTern.value;
    const mealsData = await getMealsBySearch(search);

    if (mealsData) {
        mealsData.forEach((meal) => {
            addMeal(meal);
        });
    }

});

popupCloseBtn.addEventListener('click', () => {
    mealPopup.classList.add('hidden');
})