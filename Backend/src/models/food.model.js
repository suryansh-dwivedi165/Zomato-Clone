const mongoose = require("mongoose");

const data = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    video: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    foodPartener: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food"
    }
})

const foodModel = mongoose.model("food", data);

module.exports = foodModel; 
