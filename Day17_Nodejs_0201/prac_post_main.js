const { clearCache } = require('ejs');
const express = require('express');
const app = express();
const PORT = 8002;

//body-parser
app.use(express.urlencoded({ extended: true })); //x-www-form-urlencoded 방식, 그래서 객체 형태로 결과나옴
app.use(express.json()); //json방식

//view-engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router 생성
app.get('/', (req, res) => {
    res.render('prac_post');
});

app.post('/postFormPrac', (req, res) => {
    console.log(req.body);
    res.render('prac_post_result', { title: '상세 회원정보', userinfo: req.body });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
