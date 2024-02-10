//mysql로 db가져오기2
const mysql = require('mysql2/promise'); //모듈 가져옴
const { get } = require('../routes/visitor');
//mysql 연결
//host : 주소
// 그 밑에는 가지고 올 db의 주소들이다.
const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'minjeong',
        password: process.env.DB_PASSWORD,
        database: 'kdt',
        port: 3306,
    });
};
//문자열 보간방법
//`SELECT * FROM visitor WHERE id = ${id}` 이런방법
//단점
//1.sql 인젝션 공격에 취약
//2. 문자열에 특수문자가 포함될 경우 오류가 발생할 수도 있음
//Prepared Statement
//`SELECT * FROM visitor WHERE id = ?`  --id를 ?로 변경

//쿼리문 작성
//callback함수 들어가야함
//사용자가 있는 모든 데이터 : allVisitor
const allVisitor = async () => {
    //연결에 대한 자동화 처리를 해주지 못함 , 직접 연결해주고 종료해줘야힘
    const conn = await getConn();
    const query = 'SELECT * FROM visitor';
    const [rows] = await conn.query(query);
    await conn.end();
    return rows;

    //db가져오기, rows : 모든 행
    // connection.query(query, (err, rows) => {
    //     console.log(rows);
    // });
};

const getVisitor = async (id) => {
    const conn = await getConn();
    //const query = `SELECT * FROM visitor WHERE id = ${id}`;
    const query = 'SELECT * FROM visitor WHERE id = ?';
    //?에 해당하는 id는 밑에서 배열형태로 받아야함(여러개 들어갈 수 있으니까)
    const [rows] = await conn.query(query, [id]); //쿼리문 실행 []로 가져오는건 data가 배열 형태로 가져와지니까
    await conn.end();
    return rows;
};

//data는 객체형태로 올 것
const postVisitor = async (data) => {
    const conn = await getConn(); //sql 연결
    //insert는 성공실패 여부만 알려줌
    //const query = `INSERT INTO visitor (name,comment) VALUES ('${data.name}','${data.comment}')`; //문자열이니까 ''
    const query = `INSERT INTO visitor (name,comment) VALUES (?,?)`;
    const [result] = await conn.query(query, [data.name, data.comment]);
    await conn.end();
    return result;
};

const patchVisitor = async (data) => {
    const conn = await getConn();
    //const query = `UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`;
    const query = `UPDATE visitor SET name = ?, comment = ? WHERE id = ?`;
    const [result] = await conn.query(query, [data.name, data.comment, data.id]);
    await conn.end();
    return result;
};

const deleteVisitor = async (id) => {
    const conn = await getConn();
    //const query = `DELETE FROM visitor WHERE id = ${id}`;
    const query = `DELETE FROM visitor WHERE id = ?`;
    const [result] = await conn.query(query, [id]);
    await conn.end();
    return result;
};
module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };
