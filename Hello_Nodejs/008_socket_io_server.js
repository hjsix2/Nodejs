var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/009_socket_io_client.html');
});

io.on('connection', function (socket) {
    console.log('user connected');
    
    socket.on('chat message', function (msg) {
        console.log('message : ' + msg);
        
        io.emit('chat message', msg);
    });
    
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(8000, function () {
    console.log('listening on *:8000');
});