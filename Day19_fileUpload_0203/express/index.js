const express = require('express');
const multer = require('multer');
const path = require('path'); //폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
//정적파일생성
//유저가 이미지를 업로드하면 저장될 파일
//http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const upload = multer({
    //dest : 업로드할 파일을 저장할 폴더를 지정
    //이렇게 하게되면 자동적으로 폴더가 생성이 됌
    dest: 'uploads/',
});

//multer 세부설정
const uploadDetail = multer({
    //storage : 저장할 공간에 대한 정보
    //diskStorage : 파일을 저장하기 위한 모든 제어기능 제공(파일 저장관련 설정)
    storage: multer.diskStorage({
        //destination : 업로드할 파일을 저장할 폴더를 지정
        destination(req, file, done) {
            done(null, 'uploads/'); //에러처리 : null(설정하지 않음), done은 콜백함수
        },
        //filename : 파일이름 결정(요청객체, 업로드된 파일 객체, 콜백함수 순서)
        //여기서 file은 index.ejs에서 정의한 함수(본인이 설정한 이름으로 기재)
        filename(req, file, done) {
            //extname() : 확장자를 추출
            const ext = path.extname(file.originalname);
            //basename() : 파일이름을 추출(파일의 오리지널명, 확장자) => 확장자를 제외해서 파일이름만 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName); //콜백함수 호출
        },
    }),

    //limits : 파일저장, 용량제한
    limits: { filesize: 5 * 1024 * 1024 },
});

//router
app.get('/', (req, res) => {
    res.render('index');
});
//=== 요청, 응답 데이터 처리
//multer설정이름.하나보내는거라 single.('보내야할 파일이름')
//(1) single()
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log('file', req.file);
    console.log('title', req.body);
});
//(2) array multi
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log('file', req.files); //file이 여러개이므로 꼭 복수형태로 해줘야한다.
    console.log('title', req.body);
});

//(3) multi ver2
app.post('/upload/fields', uploadDetail.fields([{ name: 'userFile1' }, { name: 'userFile2' }]), (req, res) => {
    console.log('file', req.files);
    console.log('title', req.body);
});

//(4) 동적
//single('프론트에서 보내는 key로 했던 파일명') =>> formData.append('file', file.files[0]); 이부분
app.post('/upload/axios', uploadDetail.single('file'), (req, res) => {
    console.log('file', req.file);
    res.send({ file: req.file, title: req.body });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
