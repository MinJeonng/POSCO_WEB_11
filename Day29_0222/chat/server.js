const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

const server = http.createServer(app); //http 서버
const io = socketIo(server); //socket 서버

//미들웨어
app.set('view engine', 'ejs');
//라우터
app.get('/', (req, res) => {
    res.render('client');
});
//소켓서버
io.on('connection', (socket) => {
    //socket : 접속한 웹 브라우저(client)
    //io : 접속해 있는 모든 웹 브라우저
    //web브라우저가 접속이 되면 고유한 id값이 생성됌, socket.id 로 확인가능
    //console.log(socket.id);

    //채팅방 만들기
    socket.on('create', (res, cb) => {
        //join(방이름) : 해당 방이름이 없으면 생성, 존재하면 입장
        console.log(res);
        socket.join(res.roomName);
        console.log('방 생성 후', socket.rooms);
        //socket 객체 안에 원하는 값 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        //나(웹 브라우저)를 제외한 모든 방사람에게 메시지 전달, 즉 내가 생성해서 들어가면 내 웹브라우저에는 안뜨고 다른 사람 브라우저에는 내가 입장한걸 볼 수 있음
        socket.to(res.roomName).emit('notice', `${res.userName}님이 입장하셨습니다.`); //broadcast : 광범위한 프로젝트에서 주로 쓰임(즉, 여기선 안써도 된다는 것)
        cb();
    });
    socket.on('sendMessage', (res) => {
        console.log(res); //응답한 내용(사람들이 쓴 모든 내용)
        //특정방에 전체사용자에게 메시지 보내기
        const { message, user } = res;
        io.to(socket.roomName).emit('newMessage', { message, user });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
