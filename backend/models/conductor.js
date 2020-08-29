const mongoose = require('mongoose')
const Schema = mongoose.Schema


const conductorSchema = Schema({
    cedula: String,
    primerNombre: String,
    SegundoNombre: String,
    apellidos: String,
    direccion: String,
    telefono: String,
    ciudad: String,
   
})


module.exports = mongoose.model('conductor', conductorSchema)