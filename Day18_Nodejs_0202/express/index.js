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
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
