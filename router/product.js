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

router.route('/').get(checkToken, getProducts).post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
