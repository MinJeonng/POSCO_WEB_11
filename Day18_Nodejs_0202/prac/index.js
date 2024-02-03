const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//===router (실제 페이지 생성)
app.get('/', (req, res) => {
    res.render('pracget'); //page
});

//두번째 문제
app.get('/axiosPost', (req, res) => {
    res.render('post');
});
//데이터 요청 및 응답
const id = 'kdt11';
const pw = '1234';
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
    //res.send({response : req.query})하게되면 콘솔에 data객체에 response : name이름 이런식으로 뜨게 됌
});

//두번째 문제 - 이것도 꼭 실행해봐서 결과까지 블로깅
app.post('/resultPost', (req, res) => {
    console.log('요청값', req.body);
    //유저가 적은 값이랑 이미 저장되어있는 값이랑 동일하냐 묻기위해선 아래와 같이 새로 할당가능 변수를, 객체 구조 할당을 통해 가능.
    // 회원가입할때 이런 형식으로 만들게 됨
    const { id: reqId, pw: reqPw } = req.body;
    if (id === reqId && pw === reqPw) {
        res.send({ result: true, userInfo: { id } });
    } else {
        res.send({ result: false, userInfo: null });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
