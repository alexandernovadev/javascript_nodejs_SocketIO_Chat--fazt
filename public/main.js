$(()=>{


    // Socjet Iniciado
    var socket = io();
    
    var mensaje = $('#chat-messague');
    var chat =  $('#chat');

    mensaje.focus();
    $('#message-box').submit((e)=>
    {
        e.preventDefault()
        // console.log(mensaje.val());
        // chat.append(mensaje.val() + '<br>');

        // Socket del servidor voy a enviarte esta data (mensaje) 
        // que se llama 'mensajeCliente
        socket.emit('mensajeCliente',mensaje.val());
        mensaje.val('');
    });
    

    socket.on('msg-servidor', function (data)
    {
        var msg = '<div class="w3-border w3-round-xxlarge w3-blue margenmsg">'+
         '<h4>'+'&nbsp;&nbsp;&nbsp;'+data+'</h4></div>';
        chat.append(msg + '<br>');
    });

});