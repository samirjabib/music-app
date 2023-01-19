const express = require("express")
;
const { validatorCreateTracks } = require("./middlewares/tracks.validators");

const {
    getItems,
    getItem,
    postItems,
    updateItems,
    deleteItems
} = require("./tracks.controller");




const tracksRouter = express.Router();

tracksRouter.get("/",  getItems)
tracksRouter.post("/", validatorCreateTracks , postItems)



module.exports = { tracksRouter }