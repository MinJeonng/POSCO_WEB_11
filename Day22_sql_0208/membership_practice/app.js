require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//router

const userRouter = require('./routes/Ruser');
app.use('/user', userRouter);

//오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
