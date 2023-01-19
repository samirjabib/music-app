const { storageModel } = require("../../models")


const postItems = async(body) => {
    const data = await storageModel.create(body)

    return data
}



module.exports = {
    postItems
}