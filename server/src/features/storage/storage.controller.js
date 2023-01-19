const storageServices = require('./storage.services')


const postItems = (req, res) => {
    const { files } = req
    const data = storageServices.postItems(files)
    res.send({a:1});
}



module.exports = {
    postItems
}