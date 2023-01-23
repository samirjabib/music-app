const { StatusCodes } = require("http-status-codes")


const userServices = require("./user.services")


const login = async(req, res, next) => {

}

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



module.exports = {
    createUser,
    login,
    getUsers,
}