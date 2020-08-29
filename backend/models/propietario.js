const mongoose = require('mongoose')
const Schema = mongoose.Schema


const propietarioSchema = Schema({
    cedula: String,
    primerNombre: String,
    SegundoNombre: String,
    apellidos: String,
    direccion: String,
    telefono: String,
    ciudad: String,
   
})


module.exports = mongoose.model('propietario', propietarioSchema)