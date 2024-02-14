const express = require('express');
const controller = require('../controller/Cindex');
const router = express.Router();

//localhost:8000/
router.get('/', controller.main);
router.get('/login', controller.login);
router.get('/signUp', controller.signUp);
//각 고객마다 고유의 id를 통해 해당하는 고객 정보를 띄어줘야 하므로 /:id로 생성
router.get('/profile/:id', controller.profile);

//하나의 router만 있더라도 module로 꼭 외부로 내보내야한다.
module.exports = router;
