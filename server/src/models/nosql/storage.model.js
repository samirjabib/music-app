const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String,
        },
        filename:{
            type:Number
        },
        role:{
            type:["user", "admin"],
            default:"user",
        }
    },
    {
        timestamps:true, // create date, update date
        versionKey:false
    }
)

module.exports = mongoose.model("storages", StorageScheme)