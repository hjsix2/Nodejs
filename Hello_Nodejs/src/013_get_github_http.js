/**
 * Created by hjsix2 on 2015. 2. 16..
 */
var https = require('https');

module.exports = function(callback) {
    var options = {
        hostname: 'api.github.com',
        //path: '/users/hjsix2/events',
        path: '/users/hjsix2/events?dummy=true',
        headers: {
            'User-Agent': 'Awesome-Octocat-App'
        }
    };

    https.get(options, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk
        });
        res.on('end', function() {
            callback(null, eval(data));
        });
    });;
};
