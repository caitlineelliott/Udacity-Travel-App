const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function updateUI(tripState, userCountry, userCity, departDate, returnDate, weatherInfo) {

    document.querySelector('.container').style.display = "none";

    let forecast = weatherInfo.data;
    console.log(forecast)
    let dates = [];

    for (let i = 0; i < forecast.length; i++) {
        dates[i] = new Date(`${forecast[i].datetime}T00:00:00`);
    }

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {
            const newRow = document.createElement('div');
            newRow.classList.add('forecast-row');
            document.querySelector('.forecast').appendChild(newRow)

            const tripDate = document.createElement('div');
            tripDate.classList.add('forecast-date');
            tripDate.innerHTML = `${dates[i].getMonth() + 1} / ${dates[i].getDate()}`;
            newRow.appendChild(tripDate);

            const weatherIcon = document.createElement('img');
            weatherIcon.classList.add('forecast-icon');
            weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
            newRow.appendChild(weatherIcon);

            const weather = document.createElement('div');
            weather.classList.add('forecast-high');
            weather.innerHTML = `${forecast[i].high_temp}*F / ${forecast[i].low_temp}*F`;
            newRow.appendChild(weather);
        }
    }

    if (returnDate > dates[15]) {
        console.log(`${(((((returnDate.getTime() - dates[15]) / 1000) / 60) / 60) / 24)}`);
        let longForecast = document.createElement('div');
        longForecast.innerHTML = `The forecast for ${(((((returnDate.getTime() - dates[15]) / 1000) / 60) / 60) / 24)} day(s) of your trip is outside the range of our weather app.`
        document.querySelector('.forecast').appendChild(longForecast);
        longForecast.classList.add('long-forecast');
    }

    const h1 = document.querySelector('.title');
    const h2 = document.querySelector('.subtitle');
    const output = document.querySelector('.output');
    const currentDate = new Date();
    output.classList.add('display-on');

    h1.innerHTML = `${userCity}`;

    document.querySelector('#depart-date').innerHTML = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()}`;
    document.querySelector('#arrive-date').innerHTML = `${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    document.querySelector('#trip-days-count').innerHTML = ` ${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24) + 1} days`;
    document.querySelector('#trip-nights-count').innerHTML = `${(((((returnDate.getTime() - departDate.getTime()) / 1000) / 60) / 60) / 24)} nights`;
    document.querySelector('#trip-days-until').innerHTML = `${departDate.getDate() - currentDate.getDate()} days`;
}

export { updateUI }