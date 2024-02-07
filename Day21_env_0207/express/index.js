// 상단에 dotenv를 써주는 걸 추천
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//임시db
//길이가 4인 배열
//key값들은 동일해야함

const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-07',
        comment: '안녕하세요',
    },
    {
        id: 2,
        userid: 'haaaapy',
        date: '2023-02-04',
        comment: '행복하세요',
    },
    {
        id: 3,
        userid: 'Good',
        date: '2024-02-10',
        comment: '좋은 날이에요',
    },
    {
        id: 4,
        userid: 'lucky',
        date: '2024-03-07',
        comment: '럭키한 날이 가득하길 바랍니다.',
    },
];

//router
app.get('/', (req, res) => {
    res.render('index');

    // 이거 나중에 블로깅할때 다 주석해제해서 써
    // console.log('baba');
    // //밑의 경로로 내가 env에서 설정한 환경변수에 접근 가능함
    // console.log(process.env); //환경변수에 있는 값들을 모두 보여줌
    // console.log(process.env.NODE);
    // console.log(process.env.NAME);
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === 'production') {
    //     console.log('라이브 서버입니다.');
    // } else if (process.env.NODE_ENV === 'development') {
    //     console.log('개발용 서버입니다.');
    // }
});

app.get('/comments', (req, res) => {
    res.render('comments', { list: comments });
});

//전체 리스트의 상세페이지로 이동하는 페이지
//id :2 누르면 2번에 대한 정보만 나오게 해야함
// /: 뒤에는 바뀌는 값이 접근할 수 있게 하면 된다., page 부분은 이름명 상관없음
app.get('/comment/:page', (req, res) => {
    console.log(req.params);
    console.log(req.params.page); //값만 표시
    const page = Number(req.params.page);
    //comments 배열의 요소에 접근 => 즉, 객체 하나하나에 접근
    res.render('comment', { data: comments[page - 1] }); //데이터가  1로 오면 0번째 첫번째 배열 가져오니까.
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
