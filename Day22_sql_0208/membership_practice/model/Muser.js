// const mysql = require('mysql2/promise');
const mysql = require('mysql2');

//mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'minjeong',
    password: process.env.DB_PASSWORD,
    database: 'kdt',
    port: 3306,
});
// const getConn = async () => {
//     return await mysql.createConnection({
//         host: 'localhost',
//         user: 'minjeong',
//         password: process.env.DB_PASSWORD,
//         database: 'kdt',
//         port: 3306,
//     });
// };

// exports.postSignUp = async (data) => {
//     const conn = await getConn();
//     const query = `INSERT INTO user (userid, name, pw) VALUES (?,?,?)`;
//     const [rows] = await conn.query(query, [data.userId, data.name, data.pw]);
//     await conn.end();
//     return rows;
// };

exports.postSignUp = (data, callback) => {
    console.log('회원가입 Controller에서 받아옴 data2:', data);
    const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userId}','${data.name}','${data.pw}')`;
    conn.query(query, (err, rows) => {
        console.log('signup', rows);
        if (err) {
            console.log(err);
            return;
        }
        callback(rows);
    });
};

// exports.postSignIn = async (data) => {
//     const conn = await getConn();
//     const query = `SELECT * From user WHERE userId=? AND pw=?`;
//     const [rows] = await conn.query(query, [data.userId, data.pw]);
//     await conn.end();
//     return rows;
// };

exports.postSignIn = (data, callback) => {
    const query = `SELECT * From user WHERE userId='${data.userId}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('login', rows);
        callback(rows);
    });
};

// exports.getProfile = async (req) => {
//     const conn = await getConn();
//     const query = `SELECT * FROM user WHERE id=?`;
//     try {
//         const [rows] = await conn.query(query, [req.params.id]);
//         await conn.end();
//         if (rows.length > 0) {
//             const userProfile = rows[0];
//             return userProfile;
//         } else {
//             return null;
//         }
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// };

exports.getProfile = (req, callback) => {
    const query = `SELECT *FROM user WHERE id='${req.params.id}' `;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('데이터', rows);
        if (rows.length > 0) {
            const userProfile = rows[0];
            callback(userProfile);
        } else {
            callback(null);
        }
    });
};

// exports.postUpdate = async (data) => {
//     const conn = await getConn();
//     const query = `UPDATE user SET userid=?, name=?, pw=? WHERE id=?`;
//     const [rows] = await conn.query(query, [data.userId, data.name, data.pw, data.id]);
//     await conn.end();
//     return rows;
// };

exports.postUpdate = (data, callback) => {
    console.log('post', data);
    const query = `UPDATE user SET userid='${data.userId}', name='${data.name}', pw='${data.pw}'WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        console.log('update', rows);
        if (err) {
            console.log('update err', err);
            return;
        }
        callback(rows);
    });
};

// exports.postDelete = async (data) => {
//     const conn = await getConn();
//     const query = `DELETE FROM user WHERE id=?`;
//     const [rows] = await conn.query(query, [data.id]);
//     await conn.end();
//     return rows;
// };

exports.postDelete = (data, callback) => {
    console.log('delete', data);
    const query = `DELETE FROM user WHERE id='${data.id}'`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log('delete err', err);
            return;
        }
        callback(rows);
    });
};
