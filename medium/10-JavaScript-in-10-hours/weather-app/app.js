// Variables
const apikey = '7f2277b273f1ebfc764528ef879b5028';

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Function
// To fetch openweathermap api data
async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors"}).catch(() => {
            throw new Error('Error Message');
        });

    // console.log(resp);

    const respData = await resp.json();
    
    // Fetch error message
    if (respData.cod == '404') {
        let errorMessage = respData.message;
        const errorMessageEl = document.createElement('div');
        // Clean up previous content
        main.innerHTML = '';
        // Append error in classList to modify css
        errorMessageEl.classList.add('error');
        errorMessageEl.innerText = errorMessage;
        main.appendChild(errorMessageEl);

    } else{
        addWeatherToPage(respData);
    };
}


function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    let inputSearch = capitalizeFirstLetter(search.value);

    weather.innerHTML = `
        <h2>${inputSearch}</h2>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />${temp}°C</h2>
        <small>${data.weather[0].main}</small>
    `;

    // CleanUp
    main.innerText = '';
    main.appendChild(weather);
}

// Transform temperature (K) to (C).
function KtoC(K) {
    return Math.floor(K - 273.15)
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Events toggle
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const city = search.value;

    if(city) {
        getWeatherByLocation(city);
    }
})