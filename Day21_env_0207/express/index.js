//MVC 폴더 나누기 할때 사용

// 상단에 dotenv를 써주는 걸 추천
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//첫번째 실습(mvc 폴더 다 나눈거)
//해당폴더의 index.js 생략가능, 아래 두행은 동일한 의미
const router = require('./routes/index');
// const router = require('./routes');
app.use('/', router); // /뒤에 무엇을 붙이든간에 router 파일을 보여주는 공통적인 이름이다. /board 라고 설정을 하면, /board/comment 이런식

// db 함수로 만든거 실습
const userRouter = require('./routes/user');
app.use('/user', userRouter);

//오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
