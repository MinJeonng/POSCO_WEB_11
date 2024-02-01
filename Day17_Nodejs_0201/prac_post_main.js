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
    res.render('prac_post'); //페이지 열기
});

//데이터 전송받을때만 열림
app.post('/postFormPrac', (req, res) => {
    console.log(req.body);
    const { name, gender, year, month, day, interests, color, email } = req.body;
    //userInfo: req.body : 객체로 받는다.
    res.render('prac_result', {
        title: '상세 회원정보',
        userInfo: {
            name,
            gender,
            year,
            month,
            day,
            interests,
            //key-value 형태에서 key값과 value 의 변수가 동일할때는 하나로 합치기 가능. 즉, color:color가 아니라 color만 써도 됌
            color: { result: true, color: color },
            email: { reult: true, email: email },
        }, //
    }); //데이터 정보 전달받기
});
//예외처리
//타입에 상관없이 열림
//같은 router(url)로 get,post를 여러개 만들 수 있지만, use로는 접근 불가
// ex) get 방식의 '/login'과 post방식의 '/login'은 다른 통신이지만, use는 동일한 페이지로 인식함
//so, use는 404페이지에서만 주로 사용
app.use('*', (req, res) => {
    res.render('404');
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
