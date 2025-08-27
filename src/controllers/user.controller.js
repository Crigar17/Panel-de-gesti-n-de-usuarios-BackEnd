const userModel = require('../models/user.model')
const { userById, updateUser } = require('../services/user.service')

const getUserById = async (req, res) => {
    const id = req.params.id

    try {
        const data = await userById( id )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener usuarios'})
    }
}

const patchUser = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        if (inputData.password) {
            const saltRounds = 10;
            inputData.password = await bcrypt.hash(inputData.password, saltRounds);
        }
        const data = await updateUser(id, inputData)

        res.status(200).json( data )
    }
    catch (error) {
        res.status(400).json({msg: 'Error al actualizar usuarios'})
    }
}

module.exports = {
    getUserById,
    patchUser
}