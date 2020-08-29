const express = require('express');
const propietarioController = require('../controllers/propietario')
/* const mdAuth = require('../middlewares/authenticated') */

/* const multipart = require('connect-multiparty')
const uploadImg = multipart({ uploadDir: './assets/users' }) */


const api = express.Router()


api.post('/create-propietario', propietarioController.create)


module.exports = api;