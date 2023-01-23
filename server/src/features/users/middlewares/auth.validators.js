const { check } = require("express-validator")

const { validateResults } = require("../../../utils/handleValidators")


const validateRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("age")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validateLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = [
    validateRegister,
    validateLogin
]