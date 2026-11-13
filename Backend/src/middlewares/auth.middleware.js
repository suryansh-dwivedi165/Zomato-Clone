const foodPartenerModel = require("../models/fodPartener.model");
const JWT = require("jsonwebtoken"); 

async function authFoodPartenerMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            message: "please login first"
        })
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        const foodPartener = await foodPartenerModel.findOne(decoded.id); 

        req.foodPartener = foodPartener;

        next();
    }
    catch(err) {
        res.status(400).json({
            message: "Invalid token",
        })
    }
}

async function authUserMiddleware(req, res) {

}
module.exports = {
    authFoodPartenerMiddleware,
    authUserMiddleware
}
