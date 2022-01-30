// 
const { getCates, createCate } = require("../model/cate");
exports.getCates = (req, res, next) => {
    getCates(req, (err, results) => {
        if (results.success) {
            res.status(200).json({
                success: results.success,
                data: results.data.rows,
            })
        } else {
            res.status(500).json({
                success: results.success,
                message: results.data.err.sqlMessage,
            })
        }
    })
}
exports.getCate = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: req.params.id + " id tai cate medeelel avah",
    })
}
exports.createCate = (req, res, next) => {
    createCate(req.body, (err, results) => {
        if (results.success) {
            res.status(200).json({
                success: results.success,
                data: results.data,
            })
        } else {
            res.status(500).json({
                success: results.success,
                message: results.data.err.sqlMessage,
            })
        }
    })
}
exports.updateCate = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: req.params.id + " id tai cate medeelel uurchilluu",
    })
}
exports.deleteCate = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: req.params.id + " id tai cate medeelel ustgalaa",
    })
}