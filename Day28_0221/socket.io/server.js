const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);
//socket 서버
const io = socketIo(server);

app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

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
