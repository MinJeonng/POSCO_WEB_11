require('dotenv').config(); //환경변수를 위한 모듈
const express = require(express);
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//router
const indexRouter = require('./routes/Rindex'); //page여는 역할의 페이지
app.use('/', indexRouter);

const userRouter = require('./routes/Ruser'); //CRUD를 포함하고 있는 페이지들의 첫 url
app.use('/api/user', userRouter);

//오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

//서버연결
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
