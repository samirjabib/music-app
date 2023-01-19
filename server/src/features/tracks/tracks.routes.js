const express = require("express")

const {
    getItems,
    getItem,
    postItems,
    updateItems,
    deleteItems
} = require("./tracks.controller");



const tracksRouter = express.Router();

tracksRouter.get("/", getItems)
tracksRouter.post("/", postItems)



module.exports = { tracksRouter }