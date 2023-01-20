const { check } = require("express-validator");
const { validateResults } = require("../../../utils/handleValidators");


const validatorCreateTracks = [ //Pasamos por los validators nuestro objecto REQ
    check("name")
        .exists()
        .notEmpty(),
    check("album")
    .exists()
    .notEmpty(),
    check("cover")
        .exists()
        .notEmpty(),
    check("artist.name")
        .exists()
        .notEmpty(),
    check("artist.nickname")
        .exists()
        .notEmpty(),
    check("artist.nationality")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .notEmpty(),
    check("duration.end")
        .exists()
        .notEmpty(),
    check("mediaId")
    .exists()
    .notEmpty(),
    //Enviamos el objeto req mediante callback hacia la funcion. y retornamos su valor.
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validatorGetTrack = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorUpdateTrack = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];




module.exports = { 
    validatorCreateTracks, 
    validatorGetTrack, 
    validatorUpdateTrack
}