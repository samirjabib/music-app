const express = require("express")
const { uploadMiddleware } = require("../../utils/handleStorage")
const { validatorGetItem } = require("./middlewares/storage.validators")

const { postItems} = require('./storage.controller')
const storageRouter = express.Router()


storageRouter.post("/", validatorGetItem ,uploadMiddleware.single("my-file") , postItems ) 


module.exports = { storageRouter }