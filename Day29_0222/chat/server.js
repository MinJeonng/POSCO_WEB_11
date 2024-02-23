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

//사용자 정보 갱신 함수
function getUserList(room) {
    const users = [];
    //room : 접속한 roomid
    //채팅룸에 접속한 socket.id 값을 찾음
    //console.log(io.sockets); // 여기를 들어가면 adapter라고 있고 , 밑에 같이 쓰면 동일한 방에 접속한 user들 가져옴
    const clients = io.sockets.adapter.rooms.get(room);
    console.log('clients', clients);
    if (clients) {
        clients.forEach((client) => {
            //io.sockets.sockets : socket.id가 할당한 변수들의 객체값
            const userSocket = io.sockets.sockets.get(client);
            console.log('userSocket', userSocket);
            const info = { userName: userSocket.userName, key: client };
            users.push(info);
        });
    }
    return users;
}

const roomList = [];
//소켓서버
io.on('connection', (socket) => {
    //socket : 접속한 웹 브라우저(client), 개별적으로 접근하고 싶을때 사용
    //io : 접속해 있는 모든 웹 브라우저

    //web브라우저가 접속이 되면 고유한 id값이 생성됌, socket.id 로 확인가능
    //console.log(socket.id);

    //채팅방 만들기
    socket.on('create', (res) => {
        //join(방이름) : 해당 방이름이 없으면 생성, 존재하면 입장
        // console.log(io.sockets);
        socket.join(res.roomName);
        console.log('방 생성 후', socket.rooms);
        //socket 객체 안에 원하는 값 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        //나(웹 브라우저)를 제외한 모든 방사람에게 메시지 전달, 즉 내가 생성해서 들어가면 내 웹브라우저에는 안뜨고 다른 사람 브라우저에는 내가 입장한걸 볼 수 있음
        socket.to(res.roomName).emit('notice', `${res.userName}님이 입장하셨습니다.`); //broadcast : 광범위한 프로젝트에서 주로 쓰임(즉, 여기선 안써도 된다는 것)

        //채팅방 목록 갱신(어떤 채팅방이 있는지 보여주기)
        if (!roomList.includes(res.roomName)) {
            roomList.push(res.roomName);
            //갱신된 목록은 전체가 봐야함
            io.emit('roomList', roomList);
        }

        ///사용자 정보 갱신
        //현재 접속한 room네임이 필요함
        const userList = getUserList(res.roomName);
        io.to(res.roomName).emit('userList'); //담긴정보를 프론트로 넘김
    });
    socket.on('sendMessage', (res) => {
        console.log(res); //응답한 내용(사람들이 쓴 모든 내용)
        const { message, user, select } = res;
        if (select === 'all') {
            //특정방에 전체사용자에게 메시지 보내기
            io.to(socket.roomName).emit('newMessage', { message, user, dm: false }); // (프론트에서) 디엠인지 아닌지에 대한 걸 알기 위해 t/f라고 설정
        } else {
            // io.to : 특정 객체에게 보내는 것(나(브라우저) 제외) , 여기서 select로 하게 되면 특정인에게만 보내지게 됨
            io.to(select).emit('newMessage', { message, user, dm: true });
            //자기 자신에게도 내가 보낸 속닥속닥 메시지 보내주기
            socket.emit('newMessage', { message, user, dm: true });
        }
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
