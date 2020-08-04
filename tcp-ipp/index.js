
var net = require('net');

var server = net.createServer();

//emitted when server closes ...not emitted until all connections closes.
server.on('close', function () {
    console.log('Server closed !');
});

port = 9000

server.listen(port, function () {
    console.log(`Server listening for connection requests on socket localhost ${port}`);
    console.log(port)
});

// emitted when new client connects
server.on('connection', function (socket) {

    console.log('Server is listening at port' + port);
    socket.setEncoding('utf8');

    socket.on('data', function (data) {
        console.log('Data received : ' + data);
    });
    
    socket.on('end', function (data) {
        console.log('Socket ended from other end!');
        console.log('End data : ' + data);
    });

    socket.on('close', function (error) {
        console.log('Socket closed!');
    });

});

function sendAlgo(puerto, msj) {
    const clients = net.connect({
        port: puerto,
    }, () => {
        clients.write(msj);
    });
}