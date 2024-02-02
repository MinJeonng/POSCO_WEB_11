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
    res.render('index'); //page
});

app.get('/submit', (req, res) => {
    res.render('submit');
});

app.get('/func', (req, res) => {
    res.render('func');
});
//===페이지

/**
 * render() : 뷰페이지 렌더링 render(뷰페이지이름, 데이터(선택사항))
 * send() : 모든 타입 데이터 전송(즉, 문자열, 배열, 객체, 숫자, 불린값 등..)
 * json(): 객체 타입 데이터 전송
 * redirect() : 페이지 강제 이동, redirect(페이지명)
 */

//=== 요청과 응답
app.get('/ajax', (req, res) => {
    console.log('요청 값', req.query); //터미널에서 확인가능
    const { name, email } = req.query; //req : 요청
    //응답
    //비동기에서는 보내는건 render가 아니라 send, 응답도 객체형태로 보내면 됌
    //백엔드 설계할때 result:true 로 하면 나중에 프론트개발자가 예외처리하기 수월함
    //해당 페이지에서 처리하는 것이고, 그 다음에 다른 페이지로 이동
    res.send({ result: true, name: `${name}님`, email: ` 이메일은 ${email}입니다.` }); //프론트로 보내는 데이터
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
