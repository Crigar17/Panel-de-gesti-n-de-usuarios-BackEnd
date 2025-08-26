const clientModel = require('../models/cliente.model')

const postClient = async (req, res) => {
    const inputData = req.body

    try {
        const data = await clientModel.create( inputData )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear cliente'})
    }
}

const getClient = async (req, res) => {
    try {
        const data = await clientModel.find()

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener los clientes'})
    }
}

const getByIdClient = async (req, res) => {
    const id = req.params.id

    try {
        const data = await clientModel.findById( id )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener el usuario por id'})
    }
}

const patchClient = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await clientModel.findByIdAndUpdate( id, inputData, {new: true} )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al actualizar cliente'})
    }
}

module.exports = {
    postClient,
    getClient,
    getByIdClient,
    patchClient
}