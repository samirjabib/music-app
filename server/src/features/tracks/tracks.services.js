const { tracksModel } = require('../../models')


const getItems = async() => {
    const data = await tracksModel.find()

    return data
}

const getItem = async(id) => {
    const data = await tracksModel.findById(id)

    return data
}

const postItems = async(body) => {
    console.log(body)

    const data = await tracksModel.create(body)

    return data
}

const updateItem = async(id, body) => {
    const data = await tracksModel.findOneAndUpdate(id, body,{ 
        new:true
    })
    console.log(data)

    return data
}


module.exports = {
    getItems,
    getItem,
    postItems,
    updateItem,
}