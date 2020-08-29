const express = require('express');
const conductorController = require('../controllers/conductor')
/* const mdAuth = require('../middlewares/authenticated') */

 const multipart = require('connect-multiparty')  
/* const uploadImg = multipart({ uploadDir: './assets/users' })  */


const api = express.Router()


api.post('/create-conductor', conductorController.create)


module.exports = api;