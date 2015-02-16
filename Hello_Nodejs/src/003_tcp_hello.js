var tcp = require("net");

// hello!를 출력한 뒤에 접속을 종료한다.
var s = tcp.createServer();
s.addListener("connection", function (c) {
    c.write("hello!");
    c.end();
}).listen(8000);

// connection리스너는 createServer의 첫번째 아규먼트로 사용할 수 있기 때문에 위의 코드는 아래처럼 변경할 수 있다.
//tcp.createServer(function(c) {
//    c.write("hello!");
//    c.end();
//}).listen(8000);

console.log('Server running at tcp://127.0.0.1:8000/');