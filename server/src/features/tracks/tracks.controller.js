const { StatusCodes } = require("http-status-codes")
const  { matchedData } = require("express-validator")

const tracksServices = require("./tracks.services")


const getTracks = async (req, res, next) => {
    try {
        const response = await tracksServices.getItems()
        res.status(StatusCodes.OK).json(response)

    } catch (error) {
        next(error)
    }
}

const getTrack = async (req, res, next) => {
    try {
        const { id } = matchedData(req)

        const response = await tracksServices.getItem(id);
        res.status(StatusCodes.OK).json(response)

    } catch (error) {
        next(error)
    }
}

const createTrack = async (req, res, next) => {

    try {
        const { body } = req
        const response = await tracksServices.postItems(body) 
        res.status(StatusCodes.CREATED).json(response)
    } catch (error) {
        next(error)
        console.log(error)
    }
}

const updateTrack = async (req,res, next) => {
    try {
        const {id } = matchedData(req);
        const { body} = req;
        console.log

        const response = await tracksServices.updateItem(id, body)

        const error = response.stack
        
        if(error){
            next(response)
        }

        res.status(StatusCodes.NO_CONTENT).json(response)
    } catch (error) {
        next(error)
    }
}

const deleteTrack = async (req,res, next) => {
    try {
        const { id } = matchedData(req);
        console.log(id)

        const response = await tracksServices.deleteItem()
        res.status(StatusCodes.NO_CONTENT).json(response)
    } catch (error) {
        next(error)
    }
}




module.exports = {
    createTrack,
    deleteTrack,
    getTrack,
    getTracks,
    updateTrack,
}