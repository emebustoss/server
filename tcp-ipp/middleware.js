var net = require('net');

// creates the server
var server = net.createServer();

//emitted when server closes ...not emitted until all connections closes.
server.on('close', function () {
    console.log('Server closed !');
});


let port = 5000

server.listen(port, function () {
    console.log(`Server listening for connection requests on socket localhost:${port}`);
    sendAlgo(9000, "hola")
});

// emitted when new client connects
server.on('connection', function (socket) {
    socket.setEncoding('utf8');

    socket.on('data', function (data) {
        console.log('Data received from middleware: ' + data);
        data2 = JSON.parse(data)
        console.log(data)
        test = JSON.stringify({
            "id": data2.id,
            "description": data2.description,
            "redireccionado": "true"
        })
        sendAlgo(9000, test)
        // socket.write(test)
    });
});


function sendAlgo(puerto, msj) {
    const clients = net.connect({
        port: puerto
    }, () => {
        clients.write(msj);
    });
}
