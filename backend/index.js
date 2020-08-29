const mongoose = require('mongoose'); //Requerimos mongoose para conectarnos con la base de datos
const app = require('./app'); //Requerimos nuestra app que configuramos en le archivo app.js
const port = 3000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;



mongoose.connect('mongodb://localhost:27017/acmeDb', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        console.log('No nos pudimos conectar');
    } else {
        console.log('La base de datos funciona!');
        app.listen(port, () => {
            console.log(`El Demon está vigilando en el puerto ${port}`)
        })
    }
})