const { StatusCodes } = require("http-status-codes")


const userServices = require("./user.services")




const getUsers = async(req, res) => {
    
}


const createUser = async(req, res, next) => {

    try {
        const data = userServices.createUser()

        res.status(StatusCodes.CREATED).json({data})
    } catch (error) {
        next(error)
    }
}

const getUserById = async(req, res) => {
    
}

const updateUser = async(req, res) => {
    
}

const deleteUser = async(req, res) => {
    
}


module.exports = {
    createUser
}