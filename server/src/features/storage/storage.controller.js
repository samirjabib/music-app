const storageServices = require('./storage.services')
const PUBLIC_URL=process.env.PUBLIC_URL


const createFile = (req, res) => {
    const { file } = req
    const fileData = {
        fileName: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }

    const data = storageServices.createFile(fileData)
    res.send({data});
}



module.exports = {
    createFile
}