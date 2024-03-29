//코드 앞에 주석으로 쓴 번호는 진도 나간 순서니까 블로깅할 때 잘 확인
//세팅하는건 맨 위쪽에 쓰기

//이 밑에 세줄코드의 형태는 거의 디폴트.
const express = require('express'); //모든 모듈은 문자열 형태로 작성해야함
const app = express();
const port = 8000;

//(2) 템플릿 엔진을 쓰려면 작성
// 뷰엔진을 ejs로 설정하고, 뷰엔진이 포함될 디렉토리 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//(3) 정적파일 불러오기
app.use('/public', express.static(__dirname + '/public'));

//(1) 서버에 보내기 작업
//  '/' : localhost:8000/ 형태임, 포트뒤에 생기는 것을 설정할 수 있음
// 매개변수에 request, response 필수
app.get('/', (req, res) => {
    //send() : 클라이언트에 응답데이터를 보낼때 사용
    res.send('Hello Express'); //포트 가서 그냥 화면봐도 보이고, 검사에서 응답에 가서도 이 말이 보임
});

//(2) 렌더링(템플릿 엔진을 쓰고 렌더링)
app.get('/kdt', (req, res) => {
    //http://localhost:8000/kdt 하면 test.ejs에서 쓴 내용이 나옴
    //render('파일명'): 뷰 엔진 렌더링
    res.render('test', { name: 'sally' }); //알아서 test.ejs를 찾아갈 것, 서버에서 어떤 값까지 보내주겠다 하면 객체로!렌더링해서 받는 값들은 모두 객체로!
});

//(4) 구구단
app.get('/gugudan', (req, res) => {
    res.render('gugudan', { data: 2, dan: 1, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9] }); //서버로 데이터 보내기
});

//(5) 과일
app.get('/fruits', (req, res) => {
    res.render('fruits', {
        fruits: [
            { name: 'apple', kor: '사과' },
            { name: 'banana', kor: '바나나' },
            { name: 'grape', kor: '포도' },
            { name: 'peach', kor: '복숭아' },
        ],
    });
});

//서버 시작되는 listen 은 항상 하단에 위치
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
