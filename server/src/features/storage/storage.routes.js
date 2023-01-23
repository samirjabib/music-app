const express = require("express")
const { uploadMiddleware } = require("../../utils/handleStorage")
const { validatorGetItem } = require("./middlewares/storage.validators")

const { createFile} = require('./storage.controller')
const storageRouter = express.Router()


storageRouter.post("/", validatorGetItem ,uploadMiddleware.single("my-file") , createFile ) 

storageRouter.get("/", )
storageRouter.get("/:id")
storageRouter.delete("/:id")


module.exports = { storageRouter }