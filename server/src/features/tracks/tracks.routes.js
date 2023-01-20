const express = require("express")
;
const { 
    validatorCreateTracks, 
    validatorGetTrack,
    validatorUpdateTrack
} = require("./middlewares/tracks.validators");

const {
    createTrack,
    deleteTrack,
    getTrack,
    getTracks,
    updateTrack,
    
} = require("./tracks.controller");




const tracksRouter = express.Router();

tracksRouter.get("/", getTracks)
tracksRouter.post("/", validatorCreateTracks , createTrack)
tracksRouter.get("/:id" ,validatorGetTrack , getTrack)
tracksRouter.patch("/:id", validatorUpdateTrack, updateTrack)
tracksRouter.delete("/:id", deleteTrack)





module.exports = { tracksRouter }