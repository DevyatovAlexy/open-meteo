const fetch = require('node-fetch')
const WEATHER_API_BASE_URL = 'https://api.open-meteo.com/v1/forecast'
const CITY_API_BASE_URL = 'https://geocode.maps.co/search'
const API_KEY = '65d20f54dd6ed218876641rqo38531d'

cityMeteo('Тюмень')

async function checkApiUrl(url, params) {
    try {
        
        url.search = new URLSearchParams(params)
        let response = await fetch(url)
        let json = await response.json()
        
        if (response.status !== 200 && json.length <= 0) {
            console.log('город не нашелся ')
        } else if (response.status === 200 && json.length > 0) {
            console.log('Ваш город - ' + json[0].display_name)
            return snowMeteo(json[0].lat, json[0].lon)
        } else if (response.status !== 200) {
            console.log('Погода не нашлась ')
        } else ((console.log('Температура в вашем городе' + ' ' + json.current.temperature_2m)))
        
    } catch (error) {
        console.log('Сообщение об ошибке: ' + error)
    }
}

//Получает название название города и возвращает координаты
async function cityMeteo(city) {
    const url = new URL(CITY_API_BASE_URL)
    const params = {
        q: city, api_key: API_KEY,
    }
    return checkApiUrl(url, params)
}

//Получает (latitude, longitude) координаты и возвращает температуру (json.current.temperature_2m)
async function snowMeteo(latitude, longitude) {
    const url = new URL(WEATHER_API_BASE_URL)
    const params = {
        latitude: latitude, longitude: longitude, current: 'temperature_2m,wind_speed_10m'
    }
    return checkApiUrl(url, params)

}
