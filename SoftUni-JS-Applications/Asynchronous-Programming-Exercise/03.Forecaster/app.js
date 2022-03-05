let submitBtn = document.getElementById('submit');

const weatherSymbols = {
    'Sunny': `&#x2600;`,
    'Partly sunny': `&#x26C5;`,
    'Overcast': `&#x2601;`,
    'Rain': `&#x2614;`,
    'Degrees': `&#176;`
}
async function attachEvents() {

    let location = document.getElementById('location');

    let forecast = document.getElementById('forecast');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    try {

        let getWeatherResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
        let getWeatherResult = await getWeatherResponse.json();

        let city = getWeatherResult.find(x => x.name == location.value)

        let code = city.code;

        let currConditionsResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
        let currConditionsResult = await currConditionsResponse.json();

        let forecastResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        let forecastResult = await forecastResponse.json();

        forecast.style.display = 'block';
        upcoming.style.display = 'block';
        current.replaceChildren();
        upcoming.replaceChildren();
        create(currConditionsResult, forecastResult);

    } catch (error) {

        let forecastSection = document.getElementById('current');
        forecastSection.children[0].textContent = 'Error';

        (document.getElementsByClassName('forecasts')[0])?document.getElementsByClassName('forecasts')[0].style.display='none':[]
        upcoming.style.display = 'none';
        forecast.style.display = 'block';
    }

    function create(currConditionsResult, forecastResult) {

        let degreesSymbol = weatherSymbols['Degrees']

        //Current conditions create elements..
        let currConditional = currConditionsResult.forecast.condition;
        let currConditionalName = currConditionsResult.name;
        let currConditionalHighTemp = currConditionsResult.forecast.high;
        let currConditionalLowTemp = currConditionsResult.forecast.low;

        let divLabel = document.createElement('div');
        divLabel.className = 'label';
        divLabel.textContent = 'Current conditions';

        let divForecasts = document.createElement('div');
        divForecasts.className = 'forecasts'

        let conditionSymbolSpan = document.createElement('span')
        conditionSymbolSpan.className = 'condition symbol';
        conditionSymbolSpan.innerHTML = weatherSymbols[currConditional];

        let conditionSpan = document.createElement('span')
        conditionSpan.className = 'condition';

        let forecastDataNameSpan = document.createElement('span');
        forecastDataNameSpan.className = 'forecast-data';
        forecastDataNameSpan.textContent = currConditionalName;

        let forecastDataTempSpan = document.createElement('span');
        forecastDataTempSpan.className = 'forecast-data';
        forecastDataTempSpan.innerHTML = `${currConditionalLowTemp}${degreesSymbol}/${currConditionalHighTemp}${degreesSymbol}`;

        let forecastDataConditionalSpan = document.createElement('span');
        forecastDataConditionalSpan.className = 'forecast-data';
        forecastDataConditionalSpan.textContent = currConditional;

        conditionSpan.appendChild(forecastDataNameSpan)
        conditionSpan.appendChild(forecastDataTempSpan)
        conditionSpan.appendChild(forecastDataConditionalSpan)

        divForecasts.appendChild(conditionSymbolSpan);
        divForecasts.appendChild(conditionSpan);

        current.appendChild(divLabel);
        current.appendChild(divForecasts);

        //Three-day forecast create elements..
        let currForecast = forecastResult.forecast;

        let divUpcomingLabel = document.createElement('div');
        divUpcomingLabel.className = 'label';
        divUpcomingLabel.textContent = 'Three-day forecast';

        let divForecastsInfo = document.createElement('div');
        divForecastsInfo.className = 'forecasts-info'

        currForecast.forEach(x => {
            let currForecastHighTemp = x.high;
            let currForecastLowTemp = x.low;
            let currForecastSymbol = x.condition;

            let upcomingSpan = document.createElement('span')
            upcomingSpan.className = 'upcoming';

            let upcomingSymbolSpan = document.createElement('span')
            upcomingSymbolSpan.className = 'symbol';
            upcomingSymbolSpan.innerHTML = weatherSymbols[currForecastSymbol];

            let forecastDataTempSpan = document.createElement('span');
            forecastDataTempSpan.className = 'forecast-data';
            forecastDataTempSpan.innerHTML = `${currForecastLowTemp}${degreesSymbol}/${currForecastHighTemp}${degreesSymbol}`;

            let forecastDataConditionalSpan = document.createElement('span');
            forecastDataConditionalSpan.className = 'forecast-data';
            forecastDataConditionalSpan.textContent = currForecastSymbol;

            upcomingSpan.appendChild(upcomingSymbolSpan);
            upcomingSpan.appendChild(forecastDataTempSpan);
            upcomingSpan.appendChild(forecastDataConditionalSpan);

            divForecastsInfo.appendChild(upcomingSpan);
        })
        upcoming.appendChild(divUpcomingLabel);
        upcoming.appendChild(divForecastsInfo);

    }
}

submitBtn.addEventListener('click', attachEvents)