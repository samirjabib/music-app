const express = require("express")


const { authMiddleware } = require("../../middlewares/authLogin");

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

tracksRouter.get("/", authMiddleware, getTracks)
tracksRouter.post("/", validatorCreateTracks , createTrack)
tracksRouter.get("/:id" ,validatorGetTrack , getTrack)
tracksRouter.patch("/:id", validatorUpdateTrack, updateTrack)
tracksRouter.delete("/:id",validatorGetTrack, deleteTrack)


module.exports = { tracksRouter }