const query = require('../config/database.js');
const mysql = require('mysql');
const shortid = require("shortid");
const uniqid = require("uniqid");

exports.getCates = async (data, callBack) => {
    let sql = `select * from start_backend.category`
    const checke = await query(sql);
    return callBack(null, checke);
}
exports.createCate = async (data, callBack) => {
    let sql = `INSERT INTO start_backend.category (cate_id, cate_name, cate_count_product, cate_balance )
    values (?, ?, ?, ?)`
    let inserts = [
        uniqid('cateid'),
        data.name,
        data.product_count,
        data.balance || null,
    ]
    sql = mysql.format(sql, inserts);
    const checke = await query(sql);
    return callBack(null, checke);
}