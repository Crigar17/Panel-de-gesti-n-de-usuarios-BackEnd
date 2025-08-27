const userModel = require("../models/user.model")

const userById = ( id ) => {
    return userModel.findById( id )
}

const updateUser = (id, inputData) => {
    return userModel.findByIdAndUpdate(id, inputData, {new: true})
}

module.exports = {
    userById,
    updateUser
}