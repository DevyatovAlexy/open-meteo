const fetch = require('node-fetch')

async function snowMeteo(latitude, longitude) {
    const WEATHER_API_BASE_URL =new URL('https://api.open-meteo.com/v1/forecast')
    const params = {
        latitude: latitude, longitude: longitude, current: 'temperature_2m,wind_speed_10m'
    }
   WEATHER_API_BASE_URL.search = new URLSearchParams(params)

    const response = await fetch(WEATHER_API_BASE_URL)
    const json = await response.json()
    console.log(json.current.temperature_2m)
}

snowMeteo(57.09, 65.32)
