const { User } = require('../models');
const { Op } = require('sequelize');

//회원가입
exports.signup = async (req, res) => {
    console.log(req.body);

    // const result = await User.signup(req.body); //insert
    // console.log('signup', result); -> 이 두문장 대신에, 아래의 내용을 쓴다면 Muser에 들어간 내용 쓰지않음

    //model만 정의하고 create하면 끝
    const { id, pw, username } = req.body;
    User.create({
        //req.body에 해당하는 내용
        userid: id,
        pw: pw,
        username,
    }).then(() => {
        res.json({ result: true });
    });
};

//로그인
exports.Clogin = async (req, res) => {
    //MySQL 이용한 방법
    //console.log(req.body);
    // const result = await User.Mlogin(req.body);
    // console.log('login', result);

    //sequelize 이용한 방법
    //Muser.js에서 사용했던 쿼리문을 여기서 작성하는 것
    const { id, pw } = req.body;
    //findOne 형태 안에는 where문을 무조건 객체형태로 해서 넣어야하고, 배열형태로 오는 것이 아니라 객체형태로 온다., where 문은 필수
    User.findOne({ where: { userid: id, pw: pw } }).then((result) => {
        console.log('login', result);
        if (result != null) {
            res.json({ result: true, message: '로그인 성공', id: result.id, username: result.username });
        } else {
            res.json({ result: false, message: '로그인 실패', id: null });
        }
    });
};
//회원정보 조회
exports.Cinfo = async (req, res) => {
    //MySQL 방법
    //console.log(req.params.id);
    // const result = await User.Minfo(req.params.id);
    // console.log('info', result);
    // if (result.length > 0) {
    //     res.json({ result: true, info: result[0], message: '회원존재' });
    // } else {
    //     res.json({ result: false, info: null, message: '존재하는 회원없음' });
    // }

    User.findOne({ where: { id: req.params.id } }).then((result) => {
        if (result !== null) {
            res.json({ result: true, info: result, message: '회원존재' });
        } else {
            es.json({ result: false, info: null, message: '존재하는 회원없음' });
        }
    });
};
//회원정보 전체 조회
//where은 선택
//findAll은 배열형태로 온다., 하나만 출력시켜도 배열형태로 옴
exports.Call = async (req, res) => {
    User.findAll({
        //attributes : 원하는 컬럼을 조회
        attributes: ['username', 'userid'],
        //Op(operator) -> Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
        //Op.or(또는), Op.ne(같지않음), Op.in(배열 요소 중 하나), Op.notIn(배열요소와 모두 다름)
        where: { id: { [Op.gt]: 4 } }, // id가 4초과인 값들만 출력
        order: [['id', 'DESC']], //여러가지 조건을 넣을 수 있음
        limit: 2, //~개의 결과만 출력
        offset: 1, //~개 건너띄기
    }).then((result) => {
        console.log('result', result);
        res.json({ result });
    });
};

//회원정보 수정
//수정할 데이터, where가 포함됨
exports.Cupdate = async (req, res) => {
    //const result = await User.Mupdate(req.body);

    const { id, username, pw } = req.body;
    User.update({ username: username, pw: pw }, { where: { id: id } }).then((result) => {
        //앞에 객체는 바뀔데이터, 뒤에 객체는 어디서 바뀔건지 (조건)
        console.log('update', result);
        res.json({ result: true });
    });
};
//회원정보 삭제
exports.Cdelete = async (req, res) => {
    //const result = await User.Mdelete(req.body);

    User.destroy({ where: { id: req.body.id } }).then((result) => {
        console.log('delete', result);
        res.json({ result: true });
    });
};
