// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

const loginRouter = require('./routes/login');
app.use('/', loginRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
