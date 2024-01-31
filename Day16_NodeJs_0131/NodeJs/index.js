//  벨로그에 쓸때는 주석 다 해제해서 하나하나 하기.

// const connect = require('./module.js'); //js는 생략가능
// console.log(connect.d); //터미널에서 node [파일명] 쓰면 결과 보여줌
//console.log(connect)

// const { c, d, e } = require('./module.js');
// console.log(c, d, e);

//2. 서버만들기, 서버이벤트

//createServer가 되었는지 확인하고 싶으면 웹에 들어가서 localhost:포트번호 쓰게 되면 확인 가능하다.
const http = require('http'); //모듈이름 써서 가져오기, http모듈 가져오기
// const server = http.createServer(function (req, res) {
//     res.writeHead(202);
//     res.write('<h1>Hello Nodejs world</h1>');
//     res.end('<p>End</p>');
// });
//요청할때 들어오는 이벤트
// server.on('request', function () {
//     //여기선 get으로 웹 오픈
//     console.log('요청 이벤트');
// });
// server.on('connection', function () {
//     //새로고침 등의 접속이벤트..
//     console.log('접속 이벤트');
// });

//listen : 서버 실행
// server.listen(8000, function () {
//     //콜백함수
//     console.log('8000번 port 실행');
// });

//3. html 파일전송
const fs = require('fs');
const server = http.createServer(function (req, res) {
    //파일 전송하면서 예외처리할때 쓰임
    try {
        //try : 정상작동할때 나오는 코드
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        // catch : 오작동할때 나오는 코드
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});
server.listen(8000, function () {
    //콜백함수
    console.log('8000번 port 실행');
});
