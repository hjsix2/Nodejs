// node.js의 시스템 접근 예제
var sys = require("sys"),
    spawn = require("child_process").spawn;

var ls = spawn("ls", ["-ls", "/"]);

ls.stdout.addListener('data', function (data) {
    sys.print(data);
});

ls.stdout.on('data', function (data) {
    sys.print(data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  if (code !== 0) {
    console.log('ps process exited with code ' + code);
  }
    
  ls.stdin.end();
});

