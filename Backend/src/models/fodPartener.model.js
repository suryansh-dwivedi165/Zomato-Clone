const mongoose = require("mongoose");

const foodPartenerModel = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const foodModel = mongoose.model("food", foodPartenerModel);

module.exports = foodModel; 