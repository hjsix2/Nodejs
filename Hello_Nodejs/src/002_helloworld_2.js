puts = require("sys").puts;

// setIntervla을 이용해서 hello라는 메시지를 0.5초마다 계속 반복적으로 출력
setInterval(function () {
    puts("hello");
}, 500);

// 종료명령인 Ctrl + C를 입력하면 good-bye라는 메시지를 출력한 후에 종료해줍니다. 
// process는 V8 그 자체를 의미합니다. process에 SIGINT라는 이벤트리스너를 추가하여 해당시그널이 왔을때 이벤트가 발생한다.
process.addListener("SIGINT", function () {
    puts("good-bye");
    process.exit(0);
});