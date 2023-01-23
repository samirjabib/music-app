const { StatusCodes } = require("http-status-codes")


const userServices = require("./user.services")


const login = async(req, res, next) => {

    const { email, password } = req.body
    try {
        const data = await userServices.login({email, password})

        res.status(StatusCodes.OK).json({
            data
        })

    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getUsers = async(req, res, next) => {
    try{
        const data = await userServices.getUsers()
        res.status(StatusCodes.OK).json({
            status:"succes",
            data
        })
    }catch(error){
        next(error)
    }
}


const createUser = async(req, res, next) => {
    const { body } = req
    try {
        const data = await userServices.createUser(body)
        console.log(data)
        res.status(StatusCodes.CREATED).json({
            data
        })
    } catch (error) {
        next(error)
    }
}



module.exports = {
    createUser,
    login,
    getUsers,
}