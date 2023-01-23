const { verifyToken } = require("../utils/handleJwt") 
const { userModel } = require("../models")


const authMiddleware = async(req, res, next) => {
    try {
        if(!req.headers.authorization){
            return next(new AppError('invalid session', 403));
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        console.log(dataToken)

        if(!dataToken._id){
            return next(new AppError("ERROR_ID_TOKEN", 401));
        }

        const user = await userModel.findById(dataToken._id)
        req.user = user

        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    authMiddleware
}