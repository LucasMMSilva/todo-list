const { DataTypes } = require('sequelize')
const db = require('../db/conn');

const Todo = db.define('Todo',{
    title: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
});
module.exports = Todo;