const express = require("express")
const morgan = require("morgan")
const nodemon = require("nodemon")
const cors = require("cors")


const app = express()

app.use(morgan("dev"))
app.use(nodemon)
app.use(cors())


module.exports = app 