var express = require("express")
var app = module.exports = express()

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/test.html")
})