var http = require("http"),
    sys = require("sys"),
    util = require('util');
    PORT = 8000,
    HOST = "127.0.0.1",
    arr = ["Hjsix2", "node.js"];


function testFunc() {
    return "test";
}

// 콘솔(혹은 터미널)에 출력해 주는 함수는 2가지가지 console.log(), sys.puts()
// console.log()는 JS에서 제공해주는 것이므로 바로 사용이 가능하고 sys.puts()같은 경우는 require("sys")로 가져와야 사용이 가능
http.createServer(function (req, res) {
    console.log("start Server");
    console.log("console.log : " + arr);
    console.log("console.log : " + testFunc);

    sys.puts("sys.puts : " + arr);
    sys.puts("sys.puts : " + testFunc)
    sys.puts("sys.inspect : " + sys.inspect(arr));
    sys.puts("sys.inspect : " + sys.inspect(testFunc));

    util.debug("util.debug : " + util.inspect(arr));
    
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Hello World\n");

}).listen(PORT, HOST);

console.log("Server runnig at http://127.0.0.1:8000/");