const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
const conductor_routes = require('./routes/conductor')
const vehiculo_routes = require('./routes/vehiculo')
const propietario_routes = require('./routes/propietario')


//middleware
app.use('/api', conductor_routes)
app.use('/api', vehiculo_routes)
app.use('/api', propietario_routes)


module.exports = app;