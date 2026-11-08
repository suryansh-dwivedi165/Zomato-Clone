const express = require("express");
const authController = require("../controllers/auth.controllers"); 

const router = express.Router();

router.post("/user/register", authController.registerUser);
router.get("/user/login", authController.loginUser); 
router.get("/user/logout", authController.logoutUser);

module.exports = router; 
