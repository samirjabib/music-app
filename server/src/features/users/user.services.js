const { userModel } = require("../../models")
const { encrypt } = require("../../utils/handlePassword")


const createUser = async(body) => {
    
    const hashPassword = await encrypt(body.password)
    const user = {
        ...body,
        password:hashPassword
    }

    const data = await userModel.create(user)
    data.set("password", undefined, { strict:false});

    return data
}


const getUsers = async() => {
    
}



const getUserById = async(id) => {
    
}

const updateUser = async(id, body) => {
    
}

const deleteUser = async(id) => {
    
}



module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}