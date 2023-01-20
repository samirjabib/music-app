const { StatusCodes } = require("http-status-codes")
const tracksServices = require("./tracks.services")

const getItems = async (req,res) => {
    try {
        const response = await tracksServices.getItems()
        res.status(StatusCodes.OK).json(response)

    } catch (error) {
        next(error)
    }
}

const getItem = (req,res) => {
    const { id } = req.params

    try {
        const response = tracksServices.getItem(id);
        res.status(StatusCodes.OK).json(response)

    } catch (error) {
        next(error)
    }
}

const postItems = async (req,res) => {
    const { body } = req

    try {
        const data = await tracksServices.postItems(body) 
        res.send({data})   
    } catch (error) {
        res.send(error)
    }
}

const updateItems = (req,res) => {

}

const deleteItems = (req,res) => {

}




module.exports = {
    getItems,
    getItem,
    postItems,
    updateItems,
    deleteItems
}