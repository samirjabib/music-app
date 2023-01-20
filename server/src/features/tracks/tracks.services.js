const { tracksModel } = require('../../models')


const getItems = async() => {
    const data = await tracksModel.find()

    return data
}

const getItem = async(body) => {

}

const postItems = async(body) => {


    return body
}


module.exports = {
    getItems,
    getItem,
    postItems,
}