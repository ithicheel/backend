const express = require('express');
const router = express.Router();
const { getCate, getCates, updateCate, deleteCate, createCate } = require('../controller/cate');

router.route("/").get(getCates).post(createCate);
router.route("/:id").get(getCate).put(updateCate).delete(deleteCate);

module.exports = router;