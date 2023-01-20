const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");

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
StorageScheme.plugin(MongooseDelete, { overrideMethods: "all" }); //activar soft delete
module.exports = mongoose.model("storage", StorageScheme)