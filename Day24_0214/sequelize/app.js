const express = require('express');
const db = require('./models'); //index.js 추가
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

const indexRouter = require('./routes'); // === ./routes/index
app.use('/', indexRouter);

const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

app.get('*', (req, res) => {
    res.status(404).render('404');
});

//서버 동기화처리(DB와 테이블 동기화),테이블싱크, 테이블을 mo
//force : true -> 항상 테이블을 삭제후 재생성
//force : false -> 기본값, 테이블이 존재하면 패스, 없으면 생성
//테이블이 다 만들어지고 등록이 되면 false로 바꾸는게 좋음
//db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
