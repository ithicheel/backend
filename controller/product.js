// Controller
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../model/product.js')

exports.getProducts = (req, res, next) => {
  getProducts(req.body, (err, results) => {
    if (results.success) {
      res.status(200).json({
        success: results.success,
        data: results.data.rows,
      })
    } else {
      res.status(500).json({
        success: results.success,
        error: results.data.err.sqlMessage,
      })
    }
  })
}
exports.getProduct = (req, res, next) => {
  getProduct(req, (err, results) => {
    if (results.success) {
      res.status(200).json({
        success: results.success,
        message: results.data.rows,
      })
    } else {
      res.status(500).json({
        success: results.success,
        error: results.data.err.sqlMessage,
      })
    }
  })
}
exports.createProduct = (req, res, next) => {
  createProduct(req.body, (err, results) => {
    if (results.success) {
      res.status(200).json({
        success: results.success,
        message: "Амжилттай бүтээгдэхүүн үүсгэлээ...",
      })
    } else {
      res.status(500).json({
        success: results.success,
        error: results.data.err.sqlMessage,
      })
    }
  })
}
exports.updateProduct = (req, res, next) => {
  updateProduct(req, (err, results) => {
    if (results.success) {
      res.status(200).json({
        success: results.success,
        data: results.data,
      })
    } else {
      res.status(500).json({
        success: results.success,
        error: results.data.err.sqlMessage,
      })
    }
  })
}
exports.deleteProduct = (req, res, next) => {
  deleteProduct(req, (err, results) => {
    if (results.success) {
      res.status(200).json({
        success: results.success,
        data: "Амжилттай бүтээгдэхүүнийг устгалаа...",
      })
    } else {
      res.status(500).json({
        success: results.success,
        error: results.data.err.sqlMessage,
      })
    }
  })
}
