const { StatusCodes } = require("http-status-codes")


const storageServices = require('./storage.services')
const PUBLIC_URL=process.env.PUBLIC_URL


const createFile = (req, res, next) => {
    const { file } = req
    

    try {
        const fileData = {
            filename: file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }

    
        const data = storageServices.createFile(fileData)
        res.status(StatusCodes.CREATED).json(data)
    } catch (error) {
        next(error)
    }

}

const getFiles = async (req, res, next) => {
    try {
        const data = await storageServices.getFiles()
        res.status(StatusCodes.OK).json({data})
    } catch (error) {
        next(error)
    }
}

const getFile = async(req, res, next) => {
    const { id } = req.params

    try {
        const data = await storageServices.getFile(id)
        res.status(StatusCodes.OK).json({data})
    } catch (error) {
        next(error)
        console.log(error)
    }
}

const deleteFile = async(req, res, next) => {
    const { id } = req.params
    try {
        const data = await storageServices.deleteFile(id)
        console.log(data)
        res.status(StatusCodes.NO_CONTENT).json({data})
    } catch (error) {
        next(error)
        console.log(error)
    }
}



module.exports = {
    createFile,
    getFiles,
    getFile,
    deleteFile
}