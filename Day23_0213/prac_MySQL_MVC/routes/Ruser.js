const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

//app.js에서 언급했던 것 처럼, Ruser.js는 /localhost:8000/api/user로 시작하는 페이지를 가진다.

//POST /signUp 회원가입(비밀번호가 있으니까 get이 아니라 post방식으로 )
router.post('/signUp', controller.CsignUp);

//POST /login 로그인
router.post('/login', controller.Clogin);

//POST /info 회원정보
router.get('/info/:id', controller.Cinfo);

//PATCH /update 회원수정 , 수정할 땐 방식을 patch 사용
router.patch('/update', controller.Cupdate);

//DELETE /delete 정보삭제
router.delete('/delete', controller.Cdelete);

module.exports = router;
