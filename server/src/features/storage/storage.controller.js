const storageServices = require('./storage.services')


const postItems = (req, res) => {
    const { files } = req
    const data = storageServices.postItems(files)
    res.send({data});
}



module.exports = {
    postItems
}