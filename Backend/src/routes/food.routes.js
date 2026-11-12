const expresss = require("express");
const foodController = require("../controllers/food.controller"); 
const authController = require("../middlewares/auth.middleware");
const multer = require("multer");
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
})
// post /api/food/
router.post("/", authController.authFoodPartenerMiddleware, upload.single("video"), foodController.createFood);
// router.post("/partener/login");
// router.get("/partener/logout"); 

module.exports = router; 
