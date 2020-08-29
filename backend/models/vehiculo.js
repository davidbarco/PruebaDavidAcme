const mongoose = require('mongoose')
const Schema = mongoose.Schema


const vehiculoSchema = Schema({
    placa: String,
    color: String,
    marca: String,
    tipoVehiculo: String,
    idConductor: String,
    idPropietario: String,
    
   
})


module.exports = mongoose.model('vehiculo', vehiculoSchema)