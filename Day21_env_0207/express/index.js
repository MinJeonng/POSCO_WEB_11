// 상단에 dotenv를 써주는 걸 추천
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    console.log('baba');
    //밑의 경로로 내가 env에서 설정한 환경변수에 접근 가능함
    console.log(process.env); //환경변수에 있는 값들을 모두 보여줌
    console.log(process.env.NODE);
    console.log(process.env.NAME);
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        console.log('라이브 서버입니다.');
    } else if (process.env.NODE_ENV === 'development') {
        console.log('개발용 서버입니다.');
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
