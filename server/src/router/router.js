const express = require("express")
const { tracksRouter } = require("../features/tracks/tracks.routes")
const { storageRouter } = require("../features/storage/storage.routes")


const router = express.Router()

router.use('/tracks', tracksRouter)
router.use('/storage', storageRouter )


module.exports = { router }