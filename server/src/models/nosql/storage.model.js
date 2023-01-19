const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String,
        },
        filename:{
            type:String,
        },
    },
    {
        timestamps:true, // create date, update date
        versionKey:false
    }
)

module.exports = mongoose.model("storages", StorageScheme)