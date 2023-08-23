const express = require("express");
const app = express();

const PORT = 8080;

app.listen(PORT, (req, res) => {
    console.log(`running in port http://localhost:8080`);
});

app.get("/", (req, res) => {
    res.send("in game")
})