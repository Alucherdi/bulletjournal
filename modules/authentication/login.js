var express = require("express")
var app = module.exports = express()

app.use(express.static(__dirname + "/public"))

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/test.html")
})