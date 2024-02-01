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

//그저 페이지를 열어주는 역할
app.get('/', (req, res) => {
    res.render('prac_get');
});

//데이터 전송받는 역할
app.get('/getFormPrac', (req, res) => {
    const { name, gender, year, month, day, interests, color, email } = req.query;
    //userInfo: req.body : 객체로 받는다.
    res.render('prac_result', {
        //동일한 result 파일에서 확인가능
        title: '회원정보',
        userInfo: {
            name,
            gender,
            year,
            month,
            day,
            interests,
            color: { result: false, color: null },
            email: { reult: false, email: null },
        },
    }); //데이터 정보 전달받기
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
