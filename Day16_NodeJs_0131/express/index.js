//코드 앞에 주석으로 쓴 번호는 진도 나간 순서니까 블로깅할 때 잘 확인

const express = require('express'); //모든 모듈은 문자열 형태로 작성해야함
const app = express();
const port = 8000;

//(2) 템플릿 엔진을 쓰려면 작성
// 뷰엔진을 ejs로 설정하고, 뷰엔진이 포함될 디렉토리 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//(1)
//  '/' : localhost:8000/ 형태임, 포트뒤에 생기는 것을 설정할 수 있음
// 매개변수에 request, response 필수
app.get('/', (req, res) => {
    //send() : 클라이언트에 응답데이터를 보낼때 사용
    res.send('Hello Express'); //포트 가서 그냥 화면봐도 보이고, 검사에서 응답에 가서도 이 말이 보임
});

//(2) 렌더링(템플릿 엔진을 쓰고 렌더링)
app.get('/kdt', (req, res) => {
    //http://localhost:8000/kdt 하면 test.ejs에서 쓴 내용이 나옴
    //render(): 뷰 엔진 렌더링
    res.render('test', { name: 'sally' }); //알아서 test.ejs를 찾아갈 것, 서버에서 어떤 값까지 보내주겠다 하면 객체로!렌더링해서 받는 값들은 모두 객체로!
});

//서버 시작되는 listen 은 항상 하단에 위치
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
