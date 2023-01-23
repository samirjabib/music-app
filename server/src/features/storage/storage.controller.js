const { StatusCodes } = require("http-status-codes")


const storageServices = require('./storage.services')
const PUBLIC_URL=process.env.PUBLIC_URL


const createFile = (req, res) => {
    try {
        const { file } = req
        const fileData = {
            fileName: file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }
    
        const data = storageServices.createFile(fileData)
        res.status(StatusCodes.CREATED).json({data});
    } catch (error) {
        next(error)
    }

}

const getFiles = (req, res) => {
    try {
        const data = storageServices.getFiles()
        res.status(StatusCodes.OK).json({data})
    } catch (error) {
        next(error)
    }
}



module.exports = {
    createFile,
    getFiles
}