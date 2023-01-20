const express = require("express")
const { tracksRouter } = require("../features/tracks/tracks.routes")
const { storageRouter } = require("../features/storage/storage.routes")
const { userRouter } = require("../features/users/user.routes")


const router = express.Router()

router.use('/tracks', tracksRouter)
router.use('/storage', storageRouter )
router.use('/users', userRouter )


module.exports = { router }