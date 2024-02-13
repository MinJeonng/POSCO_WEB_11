const { DataTypes } = require('sequelize');

//모델을 정의해야지 js로 sequelize접근가능
const UserModel = (sequelize) => {
    //DB 접근
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, //NOT NULL,
                primarykey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
        },
        {
            tableName: 'user',
            freezeTableName: true,
            timestamps: false,
        }
    );
    return User;
};

module.exports = UserModel;
