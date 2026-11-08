const mongoose = require("mongoose");

const data = new mongoose.Schema({
    fullName: {
        type:String, 
        required: true
    },
    email: {
        type:String, 
        required: true,
        unique: true
    },
    password: {
        type: String
    }
}, {timestamps: true})

const userModel = mongoose.model("user", data);

module.exports = userModel;
