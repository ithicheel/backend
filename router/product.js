const express = require('express');
const router = express.Router();
const {
  getProducts,
  updateProduct,
  getProduct,
  deleteProduct,
  createProduct,
} = require('../controller/product');

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
