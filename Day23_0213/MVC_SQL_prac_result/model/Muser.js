const mysql = require('mysql2/promise');

//createConnection : 단일연결, 요청 시 마다 새로운 연결 생성
//so, 적은 수의 동시연결이나 단순한 데이터 베이스 쿼리일 때 사용함

//createPool : 다중연결, 연결 풀을 생성
//풀 : 미리 정의된 수의 연결을 생성하고 관리
//so, 요청이 들어오면 연결 풀에서 사용가능한 연결을 제공, 작업 완료 후 해당연결을 반환, + 하나하나 생성하고 완료시킬 필요없음
// 장점 : 연결이 필요하지 않을 경우, 자동으로 반환하며, 폴의 연결 수를 제한하여 관리를 최적화시킴
// + so, 일반적인 웹 서비스에 적합

//단일연결(다중이랑 코드 비교해서 쓰기)
// const getConn = async () => {
//     return await mysql.createConnection({
//         host: 'localhost',
//         user: 'minjeong',
//         password: process.env.DB_PASSWORD,
//         database: 'kdt',
//         port: 3306,
//     });
// };
// const getVisitor = async (id) => {
//   const conn = await getConn();  // 이게 사라진다는 것
//   const query = 'SELECT * FROM visitor WHERE id = ?';
//   const [rows] = await conn.query(query, [id]); //쿼리문 실행 []로 가져오는건 data가 배열 형태로 가져와지니까
//   await conn.end(); //이것도 사라짐
//   return rows;
// };

//다중연결
const conn = mysql.createPool({
    host: process.env.HOST,
    user: 'minjeong',
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    connectionLimit: 15, //최대 연결수 (기본값 10)
});

exports.signUp = async (data) => {
    //data : req.body
    const query = `INSERT INTO user (userid, pw, username) VALUES (?,?,?)`;
    const [result] = await conn.query(query, [data.id, data.pw, data.username]);
    return result;
};

exports.Mlogin = async (data) => {
    const query = `SELECT * FROM user WHERE userid = ? AND pw = ?`;
    const [rows] = await conn.query(query, [data.id, data.pw]);
    return rows;
};

exports.Minfo = async (id) => {
    const query = `SELECT * FROM user WHERE id = ?`;
    const [rows] = await conn.query(query, [id]);
    return rows;
};

exports.Mupdate = async (data) => {
    const query = `UPDATE user SET pw = ?, username = ? WHERE id = ?`;
    const [result] = await conn.query(query, [data.pw, data.username, data.id]);
    return result;
};
exports.Mdelete = async (data) => {
    const query = `DELETE FROM user WHERE id = ?`;
    const [result] = await conn.query(query, [data.id]);
    return result;
};
