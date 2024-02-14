const { Post } = require('../models'); //../models에 index.js에 정의해둔 값이 Post

exports.all = async (req, res) => {
    const result = await Post.findAll({ order: [['id', 'desc']] }); //최신글부터 보임
    console.log('all', result);
    res.json({ result: true, data: result });
};

//하나씩 조회 - router.get('/:id', controller.post);
//여기서 /:id 이때 id랑 params.__ 나오는거랑 일치시켜야함

exports.post = async (req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({ where: { id: req.params.id } });
    res.json({ result: true, data: result });
};

//하나 생성
exports.write = async (req, res) => {
    const { title, content } = req.body;
    const result = await Post.create({
        title,
        content,
    });
    console.log('write', result);
    res.json({ result: true, data: result.id });
};

//하나 수정
exports.update = async (req, res) => {
    const { id, title, content } = req.body;
    const result = await Post.update({ title, content }, { where: { id } });
    console.log('update', result);
    res.json({ result: true });
};

//하나 삭제
exports.delete = async (req, res) => {
    const result = await Post.destroy({ where: { id: req.body.id } });
    console.log('delete', result);
    res.json({ result: true });
};
