const express = require('express');
const controller = require('../controller/Cuser');
const { resolveInclude } = require('ejs');
const router = express.Router();

///localhost:8000/api/user
//POST /signUp 회원가입
router.post('/signUp', controller.CsignUp);
//POST /login 로그인
router.post('/login', controller.Clogin);
//GET /info 회원정보
router.get('/info/:id', controller.Cinfo);
//PATCH /update 회원수정
router.patch('/update', controller.Cupdate);
//DELETE /delete 삭제
router.delete('/delete', controller.Cdelete);

module.exports = router;
