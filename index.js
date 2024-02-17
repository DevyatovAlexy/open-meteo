const fetch = require('node-fetch')
const WEATHER_API_BASE_URL = 'https://api.open-meteo.com/v1/forecast'

async function snowMeteo(latitude, longitude) {
    const url = new URL(WEATHER_API_BASE_URL)
    const params = {
        latitude: latitude, longitude: longitude, current: 'temperature_2m,wind_speed_10m'
    }
    url.search = new URLSearchParams(params)

    const response = await fetch(url)
    const json = await response.json()
    console.log(json.current.temperature_2m)
}

snowMeteo(57.09, 65.32)
