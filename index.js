const express = require("express");
const app = express();
const routes = require("./routes");
const path = require('path');

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname)))
app.use("/", routes)

app.listen(8000, () => {
    console.log(`server Running on Port 8000`)
})