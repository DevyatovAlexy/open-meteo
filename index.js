const fetch = require('node-fetch')

async function snowMeteo(latitude, longitude) {

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`)
    const json = await response.json()
    console.log(json.current.temperature_2m)
}

snowMeteo(57.09, 65.32)