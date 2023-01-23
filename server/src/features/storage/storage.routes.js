const express = require("express")
const { uploadMiddleware } = require("../../utils/handleStorage")
const { validatorGetFile } = require("./middlewares/storage.validators")

const { createFile, getFiles, getFile, deleteFile } = require('./storage.controller')
const storageRouter = express.Router()


storageRouter.post("/", uploadMiddleware.single("my-file") , createFile ) 

storageRouter.get("/", getFiles )
storageRouter.get("/:id", validatorGetFile, getFile)
storageRouter.delete("/:id", validatorGetFile, deleteFile)


module.exports = { storageRouter }