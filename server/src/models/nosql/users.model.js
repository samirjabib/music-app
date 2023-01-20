const mongoose = require("mongoose");
const MongooseDelete = require("mongoose-delete");

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true,
        },
        password:{
            type:String,
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
UserScheme.plugin(MongooseDelete, { overrideMethods: "all" }); //activar soft delete

module.exports = mongoose.model("user", UserScheme)