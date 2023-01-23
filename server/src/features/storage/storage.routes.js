const express = require("express")
const { uploadMiddleware } = require("../../utils/handleStorage")
const { validatorGetItem } = require("./middlewares/storage.validators")

const { createFile, getFiles } = require('./storage.controller')
const storageRouter = express.Router()


storageRouter.post("/", uploadMiddleware.single("my-file") , createFile ) 

storageRouter.get("/",getFiles )
storageRouter.get("/:id", validatorGetItem)
storageRouter.delete("/:id")


module.exports = { storageRouter }