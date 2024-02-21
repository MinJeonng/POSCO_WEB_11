const express = require('express');
const http = require('http'); //http 서버 연결
const { measureMemory } = require('vm');
const app = express();
const PORT = 8000;
const ws = require('ws');

//http 서버에 express 연결
const server = http.createServer(app);
//웹 소켓 서버 연결
const wss = new ws.Server({ server: server });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

    wss.on('connection', (socket) => {
        //console.log(wss.clients);
        console.log('클라이언트가 연결되었습니다.');

        //메시지 이벤트
        socket.on('message', (message) => {
            //웹소켓을 통해 클라이언트 서버간의 데이터를 주고받을 때는 일반적으로 문자열 또는 버퍼 형태로 주고 받습니다.
            //버퍼를 쓰는 이유 : 서버가 모두 다른 환경이기 때문에 출처를 피하는데 도움이 됩니다.
            //  console.log('message', message);
            const msg = JSON.parse(message);
            // console.log(`클라이언트에서 받은 메시지 : ${msg.message}`);
            // socket.send(`서버 메시지 : ${msg.message}`);
            wss.clients.forEach((value) => {
                value.send(`${msg.user}: ${msg.message}`);
            });
        });

        //오류 이벤트
        socket.on('error', (err) => {
            console.log('오류 발생', err);
        });

        //접속 종료
        socket.on('close', () => {
            console.log('클라이언트와 연결이 종료되었습니다.');
        });
    });
});
