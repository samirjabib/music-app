const { userModel } = require("../../models")


const createUser = async(data) => {
    
    const data = await userModel.create(data)

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