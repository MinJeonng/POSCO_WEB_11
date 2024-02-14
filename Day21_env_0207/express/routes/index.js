const express = require('express');
const router = express.Router();
const controller = require('../controller/comment'); //js는 생략가능

//router
router.get('/', controller.main);

//이 밑에 것들은 controller로 보내진다.
router.get('/comments', controller.comments);

router.get('/comment/:page', controller.comment);

//외부에서 router 담은 걸 사용가능하다.
module.exports = router;
