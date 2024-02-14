const express = require('express');
const controller = require('../controller'); //index.js 에 연결

const router = express.Router();

router.get('/', controller.main); //main page
router.get('/post', controller.post); //게시판 페이지
router.get('/post/:id', controller.detail); //상세페이지
router.get('/write', controller.write); //글 쓰는 페이지
module.exports = router;
