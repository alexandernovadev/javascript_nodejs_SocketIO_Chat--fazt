const http = require('http');
const express = require('express');
const app = express();


// MORGAN LIBRARY
const morgan = require('morgan');

const server  = http.createServer(app);
// Utiliza el metodo http, para meterle es expreesss

app.set('port', 3000);


// Utilizar MOrgan que me dice que tipo de Peticion es (get, post ...)

app.use(morgan('dev'));

/*__dirname saca el directorio raiz donde esta la app */
/*esta linea de abajo: Express utiliza el metodo estatico
y sirve la carpeta public los cliente */
app.use(express.static(__dirname + "/public"));


// Aplicacion quiero que escuches el puerto 3000 o nuber
// La variable port tiene el puerto que se va a ecsuchar
server.listen(app.get('port'), ()=>{
    console.log("El Servidor se ha Iniciado");
});

// Llama el modulo de Socket y le pasa la variable server
require('./sockets')(server);