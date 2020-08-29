/* const fs = require('fs')

 */
const path = require('path')
/* const jwt = require('../services/jwt') */
const Conductor = require('../models/conductor')
/*                                             */


function pruebas(req, res) {
    res.status(200).send({
        message: 'Nos está funcionando el controlador'
    })
}



//Función para crear un usuario

function create(req, res) {
    let conductor = new Conductor()

    let params = req.body

    conductor.cedula = params.cedula
    conductor.primerNombre = params.primerNombre
    conductor.SegundoNombre = params.SegundoNombre
    conductor.apellidos = params.apellidos
    conductor.direccion = params.direccion
    conductor.telefono = params.telefono
    conductor.ciudad = params.ciudad

    conductor.save((err, userSaved)=>{
        res.status(200).send({conductor: userSaved})
 
     })
    

   
}


module.exports = {
    pruebas,
    create
   
}