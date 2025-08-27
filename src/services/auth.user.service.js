const userModel = require("../models/user.model");

const insertUser = ( newUser ) => {
    return new userModel( newUser );
}

const readUserByEmail = async ( email ) => {
    return await userModel.findOne({email});
}

module.exports = {
    insertUser,
    readUserByEmail
}