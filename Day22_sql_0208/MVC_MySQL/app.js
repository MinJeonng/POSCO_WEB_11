require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//router
//단순 페이지 연결
const pageRouter = require('./routes/page');
app.use('/', pageRouter);

//메인화면 열린 후에 '방명록 남기기' 클릭하면 넘어가는 페이지
const visitorRouter = require('./routes/visitor');
app.use('/api/visitor', visitorRouter); //data를 주고받는 router

//오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
