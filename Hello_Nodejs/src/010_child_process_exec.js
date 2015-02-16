var exec = require('child_process').exec;

var option = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null
};

var child = exec("ls -al /", option, function (error, stdout, stderr) {
    console.log('stdout : ' + stdout);
    console.log('stderr : ' + stderr);

    if (error != null) {
        console.log('exec error : ' + error);
    }
});