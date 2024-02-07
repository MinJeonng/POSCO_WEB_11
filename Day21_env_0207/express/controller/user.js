const user = require('../model/user');

//연결된 값들 로직
exports.user = (req, res) => {
    res.render('user', { userInfo: user.userInfo() }); //이걸 user view 페이지에서 보이게끔 하는 것
};
