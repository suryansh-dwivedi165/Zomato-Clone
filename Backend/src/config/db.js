const mongoose = require("mongoose");

const connectdb = async function () {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connected");
    })
    .catch(() => {
      console.log("database is not connect ");
    });
};

module.exports = connectdb; 