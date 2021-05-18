const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function updateUI(tripState, userCountry, userCity, departDate, returnDate, weatherInfo) {
    document.querySelector('.container').style.display = "none";

    let forecast = weatherInfo.data;

    let dates = [];
    for (let i = 0; i < forecast.length; i++) {
        dates[i] = new Date(forecast[i].datetime);
    }

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] >= departDate && dates[i] <= returnDate) {
            console.log(forecast[i].high_temp);
            console.log(forecast[i].low_temp);
            console.log(forecast[i].weather.icon);

            const newRow = document.createElement('div');
            newRow.classList.add('forecast-row');
            document.querySelector('.forecast').appendChild(newRow)

            const tripDate = document.createElement('div');
            tripDate.classList.add('forecast-date');
            tripDate.innerHTML = `${dates[i].getMonth() + 1}/${dates[i].getDate() + 1}`;
            newRow.appendChild(tripDate);

            const weatherIcon = document.createElement('img');
            weatherIcon.classList.add('forecast-icon');
            weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${forecast[i].weather.icon}.png`;
            // weatherIcon.innerHTML = forecast[i].weather.icon;
            newRow.appendChild(weatherIcon);

            const weather = document.createElement('div');
            weather.classList.add('forecast-high');
            weather.innerHTML = `${forecast[i].high_temp}*F / ${forecast[i].low_temp}*F`;
            newRow.appendChild(weather);
        }
        else {
            console.log('feet');
        }
    }

    const h1 = document.querySelector('.title');
    const h2 = document.querySelector('.subtitle');
    const output = document.querySelector('.output');
    // const travelSum = document.querySelector('.travel-summary');
    const currentDate = new Date();
    output.classList.add('display-on');
    h1.innerHTML = `${userCity}, ${tripState} `;
    h2.innerHTML = '';
    // travelSum.innerHTML =
    //     `I can see that you are traveling to ${userCity} from ${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()} - ${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}.
    //         Your trip is ${returnDate.getDate() - departDate.getDate() + 1} days and ${returnDate.getDate() - departDate.getDate()} nights long.
    //         Your trip begins in ${departDate.getDate() - currentDate.getDate()} days.`
}

export { updateUI }