require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

const indexRouter = require('./routes');
app.use('/', indexRouter);

const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

const memberRouter = require('./routes/member');
app.use('/api/member', memberRouter);
