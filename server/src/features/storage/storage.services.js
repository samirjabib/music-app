const { storageModel } = require("../../models")


const createFile = async(body) => {

    const data = await storageModel.create(body)
    console.log(data)

    return data
}



module.exports = {
    createFile
}