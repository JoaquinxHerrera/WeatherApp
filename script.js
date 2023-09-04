let urlBase='http://api.openweathermap.org/data/2.5/weather'
let api_key="fd092b57c08d4ffd76464596e8d2db81"
let difKelvin = 273.15

let button = document.querySelector('#searchButton');
button.addEventListener('click', ()=>{
    const city = document.getElementById('cityEntry').value
    if(city){
        fetchWeatherData(city)
    }
})


function fetchWeatherData(city){
    fetch (`${urlBase}?q=${city}&appid=${api_key}`)
    .then(response=> response.json())
    .then(response=> mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    const divWeatherData = document.getElementById('weatherData')
    divWeatherData.innerHTML=''
    const cityName = response.name
    const temp = response.main.temp
    const humidity = response.main.humidity
    const description = response.weather[0].description
    const countryName = response.sys.country
    const icon = response.weather[0].icon

    const cityTitle = document.createElement('h3')
    cityTitle.textContent = `${cityName}, ${countryName}`

    const temperatureInfo = document.createElement('p')
    temperatureInfo.textContent = `Temperature of :${Math.floor(temp-difKelvin)} C`
    
    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `Humidity: ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

    const cityDescription = document.createElement('p')
    cityDescription.textContent = `Weather description: ${description}`

    divWeatherData.appendChild(cityTitle)
    divWeatherData.appendChild(temperatureInfo)
    divWeatherData.appendChild(humidityInfo)
    divWeatherData.appendChild(iconInfo)
    divWeatherData.appendChild(cityDescription)
}   

    
