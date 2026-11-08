require("dotenv").config();
const app = require("./src/app");
const connectdb = require("./src/config/db");
const port = 8080;


connectdb();

app.listen(port, () => {
    console.log("server is listening on port ", port);
})
