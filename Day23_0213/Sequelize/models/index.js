'use strict';

const Sequelize = require('sequelize');
//환경변수 설정
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./User')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
