const { userModel } = require("../../models")
const usersModel = require("../../models/nosql/users.model")
const { tokenSign } = require("../../utils/handleJwt")
const { encrypt, compare } = require("../../utils/handlePassword")


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
    
    const data = userModel.findOne({
        email,
    })

    if(!data){
        return console.log('dont exists this user')
    }

    const hashPassword = data.get("password");

    const check = await compare(password, hashPassword)

    if(!check){
        return console.log('invalid password')
    }

    data.set("password", undefined, { strict: false });

    const userData = {
        token: await tokenSign(data),
        data
    }

    return userData

}


module.exports = {
    createUser,
    getUsers,
    login,
}