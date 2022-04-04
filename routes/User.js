const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
router.get("/", userController.userList);
module.exports = router;
