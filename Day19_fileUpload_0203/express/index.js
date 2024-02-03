const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
//정적파일생성
//http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const upload = multer({
    //dest : 업로드할 파일을 저장할 폴더를 지정
    //이렇게 하게되면 자동적으로 폴더가 생성이 됌
    dest: 'uploads/',
});

//router
app.get('/', (req, res) => {
    res.render('index');
});
//=== 요청, 응답 데이터 처리
//multer설정이름.하나보내는거라 single.('보내야할 파일이름')
app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log('file', req.file);
    console.log('title', req.body);
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
