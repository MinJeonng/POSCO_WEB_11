const Visitor = require('../model/Visitor');

//전체 방명록 조회
const allVisitor = async (req, res) => {
    const response = await Visitor.allVisitor(); //db에 모든 값 보여주기 실행됌
    console.log(response);
    res.json({ result: response });
};

//하나 방명록 조회
const getVisitor = async (req, res) => {
    console.log(req.params.id); //id를 가져오는 법
    const data = await Visitor.getVisitor(req.params.id); //model에 있는 getVisitor
    console.log(data);
    res.json({ result: data }); //data보내기
};

//방명록 하나 작성 , 보내줘야함
const postVisitor = async (req, res) => {
    console.log(req.body);
    const data = await Visitor.postVisitor(req.body); //입력된 data
    console.log(data);
    res.json({ result: data, id: data.insertId, name: req.body.name, comment: req.body.comment });
};

//방명록 하나 수정
const patchVisitor = async (req, res) => {
    await Visitor.patchVisitor(req.body);
    res.json({ result: true });
};

//방명록 하나 삭제
const deleteVisitor = async (req, res) => {
    await Visitor.deleteVisitor(req.body.id);
    res.json({ result: true });
};
module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };
