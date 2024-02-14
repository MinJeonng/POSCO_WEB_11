const login = require('../model/login');

exports.axiosPost = (req, res) => {
    res.render('login');
};
exports.resultPost = (req, res) => {
    console.log('요청값', req.body);

    const { id, pw } = req.body;
    const loginInfo = login.loginInfo();
    if (id === loginInfo.id && pw === loginInfo.pw) {
        res.send({ success: true, message: '로그인 성공', userInfo: { id } });
    } else {
        res.send({ success: false, message: '아이디 또는 비밀번호가 잘못되었습니다.' });
    }
};
// userInfo: { id: User[0].userid }
