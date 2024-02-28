
const express = require('express')
const app = express()
const port = 3000
const temp = require('./meteo')

    app.get('/temperature',
       async function (req, res) {
         let q = await temp(req.query.name)
           res.send(q)
        })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})