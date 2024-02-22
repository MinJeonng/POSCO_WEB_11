const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);
//socket 서버전체
const io = socketIo(server);

app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

//2번째 채팅예제(브라우저끼리 실시간 채팅 가능)
app.get('/chat', (req, res) => {
    res.render('chat');
});
io.on('connection', (socket) => {
    console.log('조인 전', socket.rooms);
    socket.on('join', (res) => {
        //join이란 이벤트명
        //채팅방을 생성하는 방법 중 하나는 join(방아이디) 사용, 방이 존재하면 그 방으로 접속
        socket.join(res);
        socket.chatRoom = res; //socket이라는 객체에 chatRoom라는 key를 넣고 value는 res로 하는 전역변수 생성
        console.log('조인 후 ', socket.rooms);
        //broadcast : 나를 제외한 전체사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다.'); //방이름은 응답받은 값 : res
    });
    socket.on('form_message', (res) => {
        //서버는 접속한 모든 사람한테 보여줘야함.
        //io.to(특정방아이디).emit(이벤트) : 특정방의 전체 사용자에게 메시지가 전달됨, io는 서버전체이고 socket은 나 자신(브라우저 하나)이니까 io라고 해야함
        io.to(socket.chatRoom).emit('chat', res); //받은 데이터를 그대로 보냄. form-message를 프론트에서 백엔드로 (여기파일로)보내서 해당하는 Room에 접속한 브라우저한테 응답보냄
    });
});
server.listen(PORT, () => {
    //http를 이용해서 express와 socket을 연결하는거니까 server. 으로 시작
    console.log(`http://localhost:${PORT}/chat`);
});

/*
//기본예제
//접속하는 브라우저
//이벤트를 받는 곳(프론트에서 생성함)
io.on('connection', (socket) => {
    console.log('조인 전,', socket);
    //프론트에서 보낼때 이벤트명이랑 동일하게 해야함
    socket.on('open_message', (arg, arg2, cb) => {
        console.log('arg', arg, arg2);
        cb(arg, arg2); //프론트에서 받자마자 다시 프론트로 보낼 수 있음
    });
    socket.on('form_message', (arg) => {
        console.log(arg); //프론트에서 form_message으로 된 이벤트를 보냈기에 받은 것!
        socket.emit('backend_message', arg); //백으로 받은 것 프론트로 보냄.
    });
});

server.listen(PORT, () => {
    //http를 이용해서 express와 socket을 연결하는거니까 server. 으로 시작
    console.log(`http://localhost:${PORT}`);
});
*/
