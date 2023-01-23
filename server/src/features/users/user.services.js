const { userModel } = require("../../models")
const usersModel = require("../../models/nosql/users.model")
const { tokenSign } = require("../../utils/handleJwt")
const { encrypt } = require("../../utils/handlePassword")


const createUser = async(body) => {
    
    const hashPassword = await encrypt(body.password)
    const user = {
        ...body,
        password:hashPassword
    }

    const data = await userModel.create(user)
    data.set("password", undefined, { strict: false });

    const dataUser = {
        user:data,
        token:await tokenSign(data)
    }


    return dataUser
}


const getUsers = async() => {
    const data = await usersModel.find()

    return data
}


const login = async({email, password}) => {

    const data = findOne
}


module.exports = {
    createUser,
    getUsers,
    login,
}