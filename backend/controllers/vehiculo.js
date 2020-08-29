 const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt-nodejs') 
const Vehiculo = require('../models/vehiculo')
/* const jwt = require('../services/jwt')  */


function pruebas(req, res) {
    res.status(200).send({
        message: 'Nos está funcionando el controlador'
    })
}



//Función para crear un usuario

function create(req, res) {
    let vehiculo = new Vehiculo()

    let params = req.body

    vehiculo.placa = params.placa
    vehiculo.color = params.color
    vehiculo.marca = params.marca
    vehiculo.tipoVehiculo = params.tipoVehiculo
    vehiculo.idConductor = params.idConductor
    vehiculo.idPropietario = params.idPropietario

    vehiculo.save((err, userSaved)=>{
        res.status(200).send({vehiculo: userSaved})
 
     })
    
     
}


module.exports = {
    pruebas,
    create
   
}