require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//router
const pageRouter = require('./routes/page');
app.use('/', pageRouter);

const visitorRouter = require('./routes/visitor');
app.use('/api/visitor', visitorRouter); //data를 주고받는 router

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
