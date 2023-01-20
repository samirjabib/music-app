



const sendErrorProduction = (err, req, res) => {
    const statusCode = res.statusCode || 500

    res.status(statusCode).json({
        status:'fail',
        message:err.message || 'Shomething went very wrong'
    })
}


const sendErrorDevelopment = (err, req, res) => {
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        status:'fail',
        message:err.message,
        error:err,
        stack:err.stack,
    })
}


const globalErroHandler = (err, req, res, next) => {

    const status = 'development' //Change with the variables ENV TODO


    if(status === 'production'){
        return sendErrorProduction(req, res, next)
    }
    if(status === 'development'){
        return sendErrorDevelopment(req, res, next)
    }
};


module.exports = { globalErroHandler}