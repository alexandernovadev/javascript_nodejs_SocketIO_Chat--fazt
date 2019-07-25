
var io = require('socket.io');


module.exports = function(server)
{
    // Hacer la configuracion para escuchar clientes
var sockets = io.listen(server);

// Cada vez que hay un nuevo cliente hace esto 
sockets.on('connection', (socket)=>
{
    console.log("Hola Hiciste una nueva conexion");

    // Socket escucha este evento llamado mensajeCliente
    socket.on('mensajeCliente',function (data)
    {
        // La data es el mensaje que trajo desde el cliente

        sockets.emit('msg-servidor', data);
        //console.log(data);
    });
});
}