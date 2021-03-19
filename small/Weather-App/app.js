window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitudel;


            const api = `http://api.openweathermap.org/data/2.5/weather?q=Taiwan&appid=7f2277b273f1ebfc764528ef879b5028`;


            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
        });



    }
});