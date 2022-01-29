const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require('../controller/users');


router.route("/").post(createUser);
router.route("/login").post(loginUser);
// router.route("/:id")

module.exports = router;

