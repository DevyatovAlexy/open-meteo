
const fetch = require('node-fetch')

fetch("https://api.open-meteo.com/v1/forecast?latitude=57.09&longitude=65.32&current=temperature_2m,wind_speed_10m")
    .then(res => res.json())
    .then(json => {
        console.log(json.current.temperature_2m)
    })
