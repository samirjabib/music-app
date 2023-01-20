const express = require("express")


const userRouter = express.Router()


userRouter.get("/")
userRouter.post("/")

userRouter.get("/:id")
userRouter.put("/:id")
userRouter.delete("/:id")

module.exports = { userRouter }