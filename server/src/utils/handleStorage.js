const multer = require("multer")

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../../storage` //Le indicamos la ruta donde guardaremos los archivos

        cb(null, pathStorage)
    },
    filename:function(req, file, cb){
        const ext = file.originalname.split(".").pop() //Separamos el array por el . y agarramos el valor final
        const filename = `file${Date.now()}.${ext}` //Generamos un nombre random
        cb(null, filename)
    },
})

const uploadMiddleware = multer({ storage })

module.exports = { uploadMiddleware }