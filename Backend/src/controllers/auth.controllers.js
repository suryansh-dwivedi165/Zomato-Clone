const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const cookie = require("cookie-parser");

async function registerUser(req, res) {
    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email,
    })

    if(isUserAlreadyExists) {
        return res.status(400).send({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userModel.create({
        fullName, password: hashedPassword, email,
    })

    const token = JWT.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        },
        message: "User created successfully"
    })
} 

async function loginUser(req, res) {
    const { email, password } = req.body;

    const userDataExists = await userModel.findOne({
        email
    })

    if(!userDataExists) {
        return res.status(400).json({
            message: "Invalid email and password"
        })
    }
    
    res.status(200).json({
        message: "user exists",
        userDataExists
    })
}

module.exports = {
    registerUser,
    loginUser
};


// dictionary or brute force attack se bachne ke liye invalid response bhejte hai 