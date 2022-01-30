const query = require('../config/database.js');
const mysql = require('mysql');
const shortid = require("shortid");
const uniqid = require("uniqid");


exports.getProducts = async (data, callBack) => {
    let sql = `select * from start_backend.product`
    const checke = await query(sql);
    return callBack(null, checke);
}
exports.getProductByCate_id = async (data, callBack) => {
    let sql = `
        select *
        from start_backend.product
        where  product_cate_id = ?;
    `
    let inserts = [
        data.query.cate_id,
    ]
    sql = mysql.format(sql, inserts);
    const checke = await query(sql);
    return callBack(null, checke);
}
exports.getProduct = async (data, callBack) => {
    let sql = `select * from start_backend.product where product_id=?`
    let inserts = [
        data.params.id,
    ]
    sql = mysql.format(sql, inserts);
    const checke = await query(sql);
    return callBack(null, checke);
}
exports.createProduct = async (data, callBack) => {
    let sql = `
    INSERT INTO start_backend.product (product_id, product_name, product_price,product_desc ,product_size, product_cate_id, product_img)
    values(?, ? , ? , ? ,? ,?, ?);`
    let inserts = [
        uniqid('product'),
        data.name,
        data.price,
        data.desc,
        data.size,
        data.cate_id,
        data.img,
    ];
    sql = mysql.format(sql, inserts);
    const checke = await query(sql);
    return callBack(null, checke);
}
exports.updateProduct = async (data, callBack) => {
    console.log(data.body);
    console.log(data.params);
    let sql = `
        UPDATE start_backend.product
        SET product_id=?, product_name=?, product_price=? , product_desc=? , product_size=? , product_cate_id=?, product_img=?
        WHERE product_id =?;
    `
    let inserts = [
        data.params.id,
        data.body.name || null,
        data.body.price || null,
        data.body.desc || null,
        data.body.size || null,
        data.body.cate_id || null,
        data.body.img || null,
        data.params.id,
    ]
    sql = mysql.format(sql, inserts);
    console.log(sql);
    const checke = await query(sql);
    return callBack(null, checke);
}
// DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
exports.deleteProduct = async (data, callBack) => {
    let sql = `
        DELETE FROM start_backend.product WHERE product_id=?;
    `
    let inserts = [
        data.params.id,
    ]
    sql = mysql.format(sql, inserts);
    console.log(sql);
    const checke = await query(sql);
    return callBack(null, checke);

}