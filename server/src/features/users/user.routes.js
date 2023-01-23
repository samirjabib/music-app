const express = require("express")

const { validateLogin, validateRegister,  } = require("./middlewares/auth.validators")
const {
    createUser,
    login,
    getUsers
} = require('./user.controller')

const userRouter = express.Router()


userRouter.get("/", getUsers )
userRouter.post("/register",validateRegister, createUser)
userRouter.post("/login", validateLogin, login)

module.exports = { userRouter }