const express = require("express");
const authRoutes = require("../src/routes/auth.routes");
const cookieParser = require("cookie-parser"); 
const foodRoutes = require("./routes/food.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes); 
app.use("/api/food", foodRoutes);

app.get("/", (req, res) => {
    res.send("It is the root route");
})

module.exports = app;
