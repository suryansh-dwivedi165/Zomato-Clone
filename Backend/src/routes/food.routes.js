const express = require("express");
const foodController = require("../controllers/food.controller"); 
const authMiddlware = require("../middlewares/auth.middleware");
const multer = require("multer");
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
})
// post /api/food/
router.post("/", authMiddlware.authFoodPartenerMiddleware, upload.single("video"), foodController.createFood);

router.get("/", authMiddlware.authUserMiddleware, foodController.getFoodItems);

module.exports = router; 
