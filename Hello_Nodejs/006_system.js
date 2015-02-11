// node.js의 시스템 접근 예제
var sys = require("sys"),
    spawn = require("child_process").spawn;

var ls = spawn("ls", ["-ls", "/"]);

ls.stdout.addListener("data", function (data) {
    sys.print(data);
});