const Users = require('../model/Muser');

//index페이지에서 사용자 정보를 출력
const main = (req, res) => {
    res.render('index', { users: Users });
};

//사용자 등록 페이지
const register = (req, res) => {
    const { name, gender, major } = req.body;
    Users.push({
        id: Users.length + 1, //0부터 시작이니까
        name,
        gender,
        major,
    });
    res.send({ result: true }); //어차피 그냥 Reload니까
};

module.exports = { main, register };
