const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

let updates = []

app.get('/update/check', (req, res) => {
    res.send(updates)
})

app.post('/update/make', (req, res) => {
    let data = req.query
    updates = data
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})