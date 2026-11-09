const express = require("express");
const authController = require("../controllers/auth.controllers"); 

const router = express.Router();

// User auth api
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser); 
router.get("/user/logout", authController.logoutUser);

// Food part
router.post("/partener/register", authController.registerFoodPartener);
router.post("/partener/login", authController.loginPartener);
router.get("/partener/logout", authController.logoutPartener);

module.exports = router; 
