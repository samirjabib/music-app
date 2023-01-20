const { check, validationResult } = require("express-validator")


const validatorGetItem = [
    check("id")
        .exists()
        .notEmpty(),
        (req, res, next) => {
            return validationResult(res, req, next)
        }
]


module.exports = { validatorGetItem }
