const { clearCache } = require('ejs');
const express = require('express');
const app = express();
const PORT = 8001;

//body-parser
app.use(express.urlencoded({ extended: true })); //x-www-form-urlencoded 방식, 그래서 객체 형태로 결과나옴
app.use(express.json()); //json방식

//view-engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('prac_get');
});

app.get('/getFormPrac', (req, res) => {
    console.log(req.query);
    res.render('prac_get_result', { title: '회원정보', userinfo: req.query });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
