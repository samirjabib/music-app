const storageServices = require('./storage.services')
const PUBLIC_URL=process.env.PUBLIC_URL


const postItems = (req, res) => {
    const { file, body } = req

    const fileData = {
        fileName: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }

    const data = storageServices.postItems(fileData)
    res.send({data});
}



module.exports = {
    postItems
}