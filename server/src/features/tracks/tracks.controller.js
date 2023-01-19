const tracksServices = require('./tracks.services')


const getItems = async (req,res) => {
    
 
}

const getItem = (req,res) => {

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