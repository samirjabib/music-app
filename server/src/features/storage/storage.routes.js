const express = require("express")

const { postItems} = require('./storage.controller')
const storageRouter = express.Router()

storageRouter.post("/",postItems )


module.exports = { storageRouter }