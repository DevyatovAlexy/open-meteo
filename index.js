
const express = require('express')
const app = express()
const port = 3000
const temp = require('./meteo')

    app.get('/temperature',
       async function (req, res) {
         let result = await temp(req.query.cityName)
           res.send(result)
        })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
