var app = require('express')();

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
