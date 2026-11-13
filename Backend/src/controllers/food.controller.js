const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
    const fileUploadResult = await storageService.uploadFile(
        req.file.buffer,
        uuid() + '-' + req.file.originalname,
    ); 
    console.log("Suryansh");

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodpartener: req.foodPartener._id,
  });

  res.status(201).json({
    message: "Food created successfully",
    foodItem: foodItem,
  });
}

async function getFoodItems(req, res) {
  const foodItems = await foodModel.find({});

  res.status(200).json({
    message: "Food Items fetched successfully",
    foodItems,
  });
}

module.exports = {
  createFood,
  getFoodItems,
};
