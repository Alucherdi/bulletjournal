var express = require("express")
var app = express()


app.use(require("./modules/authentication/login"))

app.listen(4200, () => console.log("Listening to 4200"))