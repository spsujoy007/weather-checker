const getApi = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cc345d46ccb020ef6e978dc0b0d29a5&units=metric`;

    fetch(url)
        .then(Response => Response.json())
        .then(data => showWeatherReport(data))
}

document.getElementById('search-btn').addEventListener('click', function (event) {
    if (event.key = 'Enter') {
        const getAreaname = document.getElementById('search-field');
        const inputArea = getAreaname.value;
        getApi(inputArea)
    }

})


const showWeatherReport = (report) => {
    console.log(report)
    document.getElementById('celcious').innerText = report.main.temp;

    document.getElementById('area-name').innerText = report.name

    document.getElementById('weather').innerText = report.weather[0].main;

    document.getElementById('description').innerText = report.weather[0].description;
}

getApi('dhaka')