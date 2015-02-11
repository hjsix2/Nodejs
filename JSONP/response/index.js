var app = require('express')();

app.get('/', function (req, res) {
    var data = { 'name' : 'hjsix2' };
    
    var callback = req.param("callback");
    console.log(callback);
    res.set('Content-Type', 'application/json');
    
    if (callback) {
        console.log(callback + '(' + JSON.stringify(data) + ')');
        res.send(callback + '(' + JSON.stringify(data) + ')');
    } else {
        res.send(JSON.stringify(data));
    }
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
