const query = require('../config/database.js');
const mysql = require('mysql');
const shortid = require("shortid");
const date = require("date-and-time");
const uniqid = require("uniqid");

exports.createUser = async (data, callback) => {
    let sql = `
        INSERT INTO start_backend.users (user_id, user_email, user_pass, user_date , user_type)
        values(?, ?, ?, ?, ?);
    `
    let inserts = [
        uniqid('users'),
        data.email,
        data.password,
        date.format(new Date(), "YYYY/MM/DD HH:mm:ss"),
        "user",
    ];
    sql = mysql.format(sql, inserts);
    const checke = await query(sql);
    return callback(null, checke);
}
exports.getUserByEmail = async (email, callback) => {
    let sql = `
        select * from start_backend.users where user_email = ? limit 1
    `;
    let inserts = [email];
    sql = mysql.format(sql, inserts);
    const checke = await query(sql);
    return callback(null, checke);
}