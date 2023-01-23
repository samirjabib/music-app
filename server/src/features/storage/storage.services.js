const { storageModel } = require("../../models")

const MEDIA_PATH = `${__dirname}/../storage`;



const createFile = async(dataFile) => {

    const data = await storageModel.create(dataFile)
    console.log(data)
    return data
}

const getFiles = async() => {
    const data = await storageModel.find()

    return data
}

const getFile = async(id) => {
    const data = await storageModel.findById(id)

    return data
}

const deleteFile = async(id) => {
    const dataFile = await storageModel.findById(id)
    console.log(dataFile)
    const deleteResponse = await storageModel.delete({_id: id})
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