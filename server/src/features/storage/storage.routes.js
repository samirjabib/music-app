const express = require("express")
const { uploadMiddleware } = require("../../utils/handleStorage")

const { postItems} = require('./storage.controller')
const storageRouter = express.Router()




/*
 */

storageRouter.post("/", uploadMiddleware.single("my-file") ,postItems ) 


module.exports = { storageRouter }