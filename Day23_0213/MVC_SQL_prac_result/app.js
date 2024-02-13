//아직은 session, cookie를 배우지 않아서 내가 다른 사람 정보를 볼 수는 있지만, 그걸 배우면 바꿀 수 있다.(or post방식)
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

//router
const indexRouter = require('./routes/Rindex');
app.use('/', indexRouter);

const userRouter = require('./routes/Ruser');
app.use('/api/user', userRouter);

app.get('*', (req, res) => {
    res.status(404).render('404');
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
