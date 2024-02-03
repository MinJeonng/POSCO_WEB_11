const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    //dest : 업로드할 파일을 저장할 폴더를 지정
    //이렇게 하게되면 자동적으로 폴더가 생성이 됌
    dest: 'uploads/',
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = req.body.id + ext;
            // path.basename(file.originalname, ext)
            done(null, newName);
        },
    }),
    //limits : 파일저장, 용량제한

    limits: { fileSize: 5 * 1024 * 1024 },
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', uploadDetail.single('userFile'), (req, res) => {
    console.log('file', req.file);
    console.log('title', req.body);
    res.render('result', { title: '프로필', userInfo: req.body, file: req.file.path }); //여기서 파일도 같이 보내줘야함
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
