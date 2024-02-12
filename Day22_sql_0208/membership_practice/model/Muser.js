const mysql = require('mysql2/promise');

const conn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'minjeong',
        password: process.env.DB_PASSWORD,
        database: 'kdt',
        port: 3306,
    });
};

const post_signup = async (data) => {
    try {
        const query = `INSERT INTO user1 (userid, pw, name) VALUES (?, ?, ?)`;
        const rows = await conn.query(query, [data.userid, data.pw, data.name]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

const post_signin = async (data) => {
    try {
        const query = 'SELECT * FROM user1 WHERE userid = ? AND pw = ?';
        const [rows] = await conn.query(query, [data.userid, data.pw]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

const post_profile = async (data) => {
    try {
        const query = 'SELECT * FROM user1 WHERE userid = ?';
        const [rows] = await conn.query(query, [data.profile]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

const edit_profile = async (data) => {
    try {
        const query = 'UPDATE user1 SET userid= ?, pw = ?, name = ? WHERE id = ?';
        const [rows] = await conn.query(query, [data.userid, data.pw, data.name, data.id]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};
const delete_profile = async (id) => {
    try {
        const query = 'DELETE FROM user1 WHERE id = ?';
        const [rows] = await conn.query(query, [id]);
    } catch (error) {
        console.log(error);
    }
};
module.exports = { post_signin, post_signup, post_profile, edit_profile, delete_profile };
