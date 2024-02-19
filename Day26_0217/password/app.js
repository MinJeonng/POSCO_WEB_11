const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 8000;
let sign = ''; // == db , 전역변수로 password 저장

app.use(express.json());

//router
//순서대로 단방향, 양방향.. 실행할때 쓰임
app.post('/sign', (req, res) => {
    const { pw } = req.body;
    //const sign = createHashedPassword(pw);
    //sign = createPbkdf(pw); //전역변수안에 들어가게 된다.
    //sign = cipherEncrypt(pw); //어떠한 문장을 넣으면 그게 sign에 들어가게 되고, 밑에서 post로 받아서 해결
    sign = bcryptPassword(pw);
    res.json({ result: sign }); //암호화한 값을 보겠다.
});

app.post('/verify', (req, res) => {
    const { pw } = req.body;
    // const compare = verifyPassword(pw, sign); //비교할 값들을 () 안에 삽입
    // const result = decipher(sign);
    const result = comparePassword(pw, sign); //입력한 값, 저장된 값
    res.json({ result: result }); //result : result 라고 써도 되고 그냥 result라고 써도 된다.
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//단방향
//해시함수
const createHashedPassword = (password) => {
    //createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha256').update(password).digest('base64');
};
//pdkdf2 함수
const salt = crypto.randomBytes(16).toString('base64'); //salt 생성 , 난수로 생성

// 이 밑의 값들을 쓰겠다면 이것도 다 .env에 넣어야 함
const iteration = 10000; //반복횟수
const keylen = 64; //생성할 키의 길이
const digest = 'sha256'; //알고리즘

//암호화 생성
const createPbkdf = (password) => {
    console.log(salt);
    //pbkdf2 함수(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘) 으로 생성, 반환은 buffer값
    //반환되는 buffer는 문자열로 변경해줘고 넣어줘야함
    const sign = crypto.pbkdf2Sync(password, salt, iteration, keylen, digest);
    console.log(sign);
    return sign.toString('base64');
};

//암호 비교
const verifyPassword = (password, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iteration, keylen, digest).toString('base64');
    if (compare === dbPassword) {
        return true;
    } else {
        return false;
    }
}; //dbPassword : db에 넣어줄 값

//양방향
const algorithm = 'aes-256-cbc'; // 256bit 키를 사용하고, 블록 크기는 128bit
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //초기화 벡터, 보안성을 높이기 위해 사용

//암호화
const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv); //암호화 객체 생성
    let encryptedData = cipher.update(word, 'utf-8', 'base64'); //()안은 암호화할 값 , utf-8(입력데이터인코딩)을 받아서 base64(출력데이터인코딩)로 바꾸겠단 의미
    encryptedData += cipher.final('base64'); //최종결과 생성
    return encryptedData;
};

//복호화
const decipher = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv); //복호화 객체 생성
    let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
    decryptedData += decipher.final('utf-8');
    return decryptedData;
};

//bcrypt 단방향
const saltNumber = 10;
//암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
};

//비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword); //내가 입력한 값, 백엔드에 있는 값
};
