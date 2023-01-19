const mongoose = require("mongoose")

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        album:{
            type:String,
            unique:true,
        },
        cover:{
            type:String,
            validator: (req) => {
                return true
            },
            message:"ERROR_URL",
        },
        artist:{
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nationality:{
                type:String,
            },
            duration:{
                start:{
                    type:Number,
                },
                end:{
                    type:Number,
                },
            },
            mediaId:{
                type:mongoose.Types.ObjectId //Tipo de dato especial mongoose
            },
        }
    },
    {
        timestamps:true, // create date, update date
        versionKey:false
    }
)

module.exports = mongoose.model("tracks", TracksScheme)