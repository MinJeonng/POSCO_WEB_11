//생성, 조회, 삭제, 수정 포함되어야함

const express = require('express');
const controller = require('../controller/Cvisitor');

const router = express.Router();

//방명록에 관련된 데이터를 처리하는 라우터
//localhost:8000/api/visitor  -> 이 url부터 시작되는 페이지, 이게 root가 됨(app.js에서 정의)
//GET / 방명록 전체 보이기
router.get('/', controller.allVisitor);

//GET /:id 방명록 하나만 보이게 하기
router.get('/:id', controller.getVisitor);
//POST /write : 방명록 하나 작성
router.post('/write', controller.postVisitor);
//PATCH /update 방명록 하나 수정
router.patch('/update', controller.patchVisitor);
// //DELETE /delete 방명록 하나 삭제
router.delete('/delete', controller.deleteVisitor);

module.exports = router;
