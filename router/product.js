const express = require('express');
const router = express.Router();
const checkToken = require('../auth/token_validation');
const {
  getProducts,
  updateProduct,
  getProduct,
  deleteProduct,
  createProduct,
} = require('../controller/product');

router.route('/').get(checkToken, getProducts).post(checkToken, createProduct);
router.route('/:id').get(checkToken, getProduct).put(checkToken, updateProduct).delete(checkToken, deleteProduct);

module.exports = router;
