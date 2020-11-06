const express = require('express')
const app = express()

const cors = require('cors')

const database = require('./models/repository')
database.connect()

const ghiblis = require('./routes/ghibli-routes')
const herois = require('./routes/herois-routes')

app.use(cors())
app.use(express.json())
app.use('/', ghiblis)
app.use('/', herois)

module.exports = app



//mongoimport --db reprograma --collection colors --jsonArray --file colorsrgb.json