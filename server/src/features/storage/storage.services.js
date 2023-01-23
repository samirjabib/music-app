const { storageModel } = require("../../models")


const createFile = async(body) => {

    const data = await storageModel.create(body)
    console.log(data)

    return data
}

const getFiles = async() => {
    const data = await storageModel.find()

    return data
}



module.exports = {
    createFile,
    getFiles
}