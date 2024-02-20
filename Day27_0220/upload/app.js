require('dotenv').config();
const express = require('express');
const aws = require('aws-sdk'); //aws 설정을 위한 모듈
const multerS3 = require('multer-s3'); //aws s3에 파일 업로드 하기 위한 multer 설정
const multer = require('multer');
const app = express();
const PORT = 8000;

//aws 설정
//s3가 bucket으로 접근
aws.config.update({
    accessKeyId: process.env.ACCESSKEYID, //액세스키
    secretAccessKey: process.env.SECRETACCESSKEY, //액세스 비밀번호
    region: 'ap-northeast-2',
});

//aws s3 인스턴스 생성
const s3 = new aws.S3();

//multer 설정
const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'myhostedbucket-min',
        acl: 'public-read', //파일 접근권한(public-read로 해야 업로드된 파일이 공개)
        metadata: function (req, file, cb) {
            cb(null, { fileName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

//view engine, 미들웨어
app.set('view engine', 'ejs');

//라우터
//페이지
app.get('/', (req, res) => {
    res.render('index');
});
//api
//여러개의 파일 업로드
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
