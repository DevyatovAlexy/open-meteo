const fetch = require('node-fetch')
function snowMeteo(latitude,longitude) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`)
        .then(res => res.json(latitude,longitude))
        .then(json => {
            console.log(json.current.temperature_2m)
        })
}
snowMeteo(57.09,65.32)
