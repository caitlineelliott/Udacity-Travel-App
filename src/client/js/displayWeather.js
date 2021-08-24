function displayWeather(weatherContainer, newTripContainer, loopDates, loopForecast, tripDaysCount, tripWeatherArr, loopWeather) {
    let newRow = document.createElement('div');
    const tripDate = document.createElement('div');
    const weatherIcon = document.createElement('img');
    const weather = document.createElement('div');

    newRow.classList.add('forecast-row');
    tripDate.classList.add('forecast-date');
    weatherIcon.classList.add('forecast-icon');
    weather.classList.add('forecast-temp');

    newRow.appendChild(tripDate);
    newRow.appendChild(weatherIcon);
    newRow.appendChild(weather);

    weatherContainer.appendChild(newRow);

    if (newTripContainer) {
        let tripDates = loopDates;
        let tripWeather = loopForecast;

        tripDate.innerHTML = `${tripDates.getMonth() + 1} /${tripDates.getDate()}`;
        weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${tripWeather.weather.icon}.png`;
        weather.innerHTML = `${tripWeather.high_temp}°F / ${tripWeather.low_temp}°F`;

        tripDaysCount.push(newRow);
        let tripDayData = {}
        tripDayData['date'] = tripDate.innerHTML;
        tripDayData['weatherIcon'] = weatherIcon.src;
        tripDayData['weather'] = weather.innerHTML;
        tripWeatherArr.push(tripDayData);
    }
    else if (newTripContainer === undefined) {
        tripDate.innerHTML = loopWeather.date;
        weatherIcon.src = `${loopWeather.weatherIcon}`;
        weather.innerHTML = loopWeather.weather;
    }
}

function displayLongForecast(departDate, returnDate, lastDay, weatherData, tripEnd, weatherContainer, tripDaysCount) {
    let longForecast = document.createElement('div');

    if (departDate > lastDay || weatherData[0] === undefined) {
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `Unfortunately, your trip dates are outside the range of our weather app and we are unable to provide a forecast at this time.`
        weatherContainer.appendChild(longForecast);
    } else if (returnDate > lastDay && weatherData[0] !== undefined) { // figure out new metric?
        longForecast.classList.add('long-forecast');
        longForecast.innerHTML = `The forecast for some of your trip dates is outside the range of our weather app.`
        weatherContainer.appendChild(longForecast);
    }

    if (tripDaysCount.length < 6) { weatherContainer.style = "padding-bottom: 20px;" }
    if (weatherContainer.parentElement.parentElement.classList[0] === 'saved-trips') {
        weatherContainer.lastChild.style = 'padding: 20px; margin: 0 auto';

    }
}

export { displayWeather, displayLongForecast }