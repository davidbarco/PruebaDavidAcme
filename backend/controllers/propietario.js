/* const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt-nodejs') */
/* const jwt = require('../services/jwt') */
const Propietario = require('../models/propietario')


function pruebas(req, res) {
    res.status(200).send({
        message: 'Nos está funcionando el controlador'
    })
}



//Función para crear un usuario

function create(req, res) {
    let propietario = new Propietario()

    let params = req.body

    propietario.cedula = params.cedula
    propietario.primerNombre = params.primerNombre
    propietario.SegundoNombre = params.SegundoNombre
    propietario.apellidos = params.apellidos
    propietario.direccion = params.direccion
    propietario.telefono = params.telefono
    propietario.ciudad = params.ciudad

    propietario.save((err, userSaved)=>{
       res.status(200).send({propietario: userSaved})

    })
   
}


module.exports = {
    pruebas,
    create
   
}