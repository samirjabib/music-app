const express = require("express")

const { validateLogin, validateRegister } = require("./middlewares/auth.validators")
const {
    createUser,
    login
} = require('./user.controller')

const userRouter = express.Router()


userRouter.get("/", )
userRouter.post("/register",validateRegister, createUser)
userRouter.post("/login", validateLogin, login)

module.exports = { userRouter }