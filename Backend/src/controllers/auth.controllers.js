const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const cookie = require("cookie-parser");
const foodPartenerModel = require("../models/fodPartener.model");

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExists) {
    return res.status(400).send({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    fullName,
    password: hashedPassword,
    email,
  });

  const token = JWT.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
    message: "User created successfully",
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const userDataExists = await userModel.findOne({
    email,
  });

  if (!userDataExists) {
    return res.status(400).json({
      message: "Invalid email and password",
    });
  }

  const isPasswordValid = bcrypt.compare(password, userDataExists.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email and password",
    });
  }

  const token = JWT.sign(
    {
      id: userDataExists._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      _id: userDataExists._id,
      email: userDataExists.email,
      fullName: userDataExists.fullName,
    },
  });
}

async function logoutUser(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "User logged successfully",
  });
}

async function registerFoodPartener(req, res) {
  const { name, email, password } = req.body;

  const partenerAlreadyExists = await userAlreadyExists.findOne({
    email,
  });

  if (partenerAlreadyExists) {
    res.status(400).json({
      message: "Partener already exists",
    });
  }

  const hashedPassword = bcrypt.hash(password, 10);

  const data = await userAlreadyExists.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = JWT.sign(
    {
      id: data._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "Partener created Successfully",
    user: {
        name: data.name,
        email: data.email
    }
  });
}

async function loginPartener(req, res) {
    const { name, email, password } = req.body;

    const partenerData = foodPartenerModel.findOne({
        email
    })

    if(!partenerData) {
        res.status(400).json({
            message: "Partener doesn't exists"
        })
    }

    const checkPartener = bcrypt.compare(password, partenerData.password);

    if(!checkPartener) {
        res.status(400).json({
            message: "User credientials doesn't match"
        })
    }

    const token = JWT.sign({
        id: partenerData._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(200).json({
        message: "Partener login Successfully",
        user: {
            name: partenerData.name,
            email: partenerData.email,
        }
    })
}

async function logoutUser(req, res) {
    res.clearCookie("token");

    res.status(200).json({
        message: "Partener deleted successfully"
    })
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};

// dictionary or brute force attack se bachne ke liye invalid response bhejte hai
