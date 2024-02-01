//Node.js는 순서가 중요하다
//상단엔 가져오는걸 쓰고, 중간은 미들웨어, 하단은 주소 및 서버생성
const { clearCache } = require('ejs');
const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true })); //x-www-form-urlencoded 방식
app.use(express.json()); //json방식

//view-engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router (페이지 생성)
app.get('/', (req, res) => {
    res.render('index'); //index라는 ejs파일을 생성하겠다.
});
app.get('/getForm', (req, res) => {
    //get 방식 :req.query
    console.log(req.query);
});

//서버실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
