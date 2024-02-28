const fetch = require('node-fetch')
const WEATHER_API_BASE_URL = 'https://api.open-meteo.com/v1/forecast'
const CITY_API_BASE_URL = 'https://geocode.maps.co/search'
const API_KEY = '65d20f54dd6ed218876641rqo38531d'



async function apiRequest(url, params) {
    try {
        url.search = new URLSearchParams(params)
        let response = await fetch(url)
        let json = await response.json()
        if (response.status !== 200 && json.length <= 0) {
            throw new Error('Request not successful')
        }
        return json
    } catch (error) {
        console.log('Сообщение об ошибке: ' + error)
    }
}

async function getTemperature(value) {
    const coordinates = await getCityCoordinates(value)
    const temperature = await getMeteo(coordinates[0].lat, coordinates[0].lon)
    if (coordinates === undefined) {
        throw new Error('Wrong argument %Сity coordinates are not defined%')
    }
    if (temperature === undefined) {
        throw new Error('Wrong argument %Тo temperature found%')
    } else return temperature.current
}

//Получает название название города и возвращает координаты
async function getCityCoordinates(value) {
    if (value == null || value.trim().length === 0 || !isNaN(value)) {
        throw new Error('Wrong argument %cityName%')
    }
    const url = new URL(CITY_API_BASE_URL)
    const params = {
        q: value, api_key: API_KEY,
    }
    return await apiRequest(url, params)
   }

//Получает (latitude, longitude) координаты и возвращает температуру (json.current.temperature_2m)
async function getMeteo(latitude, longitude) {
    if (latitude == null || longitude == null || latitude.trim().length === 0 || longitude.trim().length === 0 || isNaN(latitude, longitude)) {
        throw new Error('Wrong argument %argumentName%')
    }
    const url = new URL(WEATHER_API_BASE_URL)
    const params = {
        latitude: latitude, longitude: longitude, current: 'temperature_2m,wind_speed_10m'
    }
    return await apiRequest(url, params)
}
module.exports = getTemperatu
