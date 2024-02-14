const User = require('../model/Muser');

//회원가입
exports.CsignUp = async (req, res) => {
    console.log(req.body); //post니까 body
    const result = await User.MsignUp(req.body); //Muser에서 정의한 data가 req.body인거임
    console.log('signup:', result);
    res.json({ result: true });
};

//로그인
exports.Clogin = async (req, res) => {
    console.log(req.body);
    const result = await User.Mlogin(req.body); // === Muser에서 쿼리문을 통해서 받아온 rows
    console.log('login', result);
    if (result.length >= 1) {
        //한글자 이상이면 성공
        res.json({ result: true, message: '로그인 성공', data: result[0] }); //프론트에만 보여주는 결과, id: result[0].id
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
};

//회원정보 조회
exports.Cinfo = async (req, res) => {
    console.log(req.params.id);
    const result = await User.Minfo(req.params.id);
    console.log('info', result);
    if (result.length > 0) {
        res.json({ result: true, info: result[0], message: '회원존재' });
    } else {
        res.json({ result: false, info: null, message: '존재하지 않는 회원' });
    }
};

//회원정보 수정
exports.Cupdate = async (req, res) => {
    const result = await User.Mupdate(req.body);
    console.log('update', result);
    res.json({ result: true });
};

//회원정보 삭제
exports.Cdelete = async (req, res) => {
    const result = await User.Mdelete(req.body); //body에는 id하나만 받아오게 되는 것
    console.log('delete', result);
    res.json({ result: true });
};
