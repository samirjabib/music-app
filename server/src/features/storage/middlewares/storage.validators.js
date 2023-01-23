const { check } = require("express-validator")
const { validateResults } = require("../../../utils/handleValidators")


const validatorGetFile = [
    check("id")
        .exists()
        .notEmpty(),
        (req, res, next) => {
            return validateResults(res, req, next)
        }
]


module.exports = { validatorGetFile }
