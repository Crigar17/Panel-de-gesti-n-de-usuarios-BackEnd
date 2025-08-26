const userModel = require('../models/user.model')

const getUserById = async (req, res) => {
    const id = req.params.id

    try {
        const data = await userModel.findById( id )

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
        const data = await userModel.findByIdAndUpdate(id, inputData, {new: true})

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