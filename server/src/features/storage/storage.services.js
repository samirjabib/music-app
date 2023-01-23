const { storageModel } = require("../../models")
const fs = require("fs");



const createFile = async(body) => {

    const data = await storageModel.create(body)
    console.log(data)

    return data
}

const getFiles = async() => {
    const data = await storageModel.find()

    return data
}

const getFile = async(id) => {
    const data = await findById(id)
    return data
}

const deleteFile = async(id) => {
    const dataFile = await storageModel.findById(id)
    const deleteResponse = await storageModel.deleteMany({_id: id})
    const { filename } = dataFile
    
    const filePath = `${MEDIA_PATH}/${filename}`

    const data = {
        filePath,
        deleted: deleteResponse.matchedCount,
    }
    return data
}



module.exports = {
    createFile,
    getFiles,
    getFile,
    deleteFile
}