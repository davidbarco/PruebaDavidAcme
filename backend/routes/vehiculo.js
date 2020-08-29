const express = require('express');
const vehiculoController = require('../controllers/vehiculo')
/* const mdAuth = require('../middlewares/authenticated') */

const multipart = require('connect-multiparty')
/* const uploadImg = multipart({ uploadDir: './assets/users' })  */


const api = express.Router()


api.post('/create-vehiculo', vehiculoController.create)


module.exports = api;