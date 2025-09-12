const logger = require('../logs/logger')
const clientModel = require('../models/cliente.model')
const { insertCliente, clienteGet, clienteGetById, clientePatch } = require('../services/cliente.service')

const postClient = async (req, res) => {
    const inputData = req.body

    try {
        const cleinteNew = insertCliente( inputData )
        const data = await cleinteNew.save()
        
        logger.info('Cliente creado exitosamente')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al crear el cliente')

        res.status(400).json({msg: 'Error al crear cliente'})
    }
}

const getClient = async (req, res) => {
    try {
        const data = await clienteGet()

        logger.info('Clientes encontrados')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al encontrar los clientes')

        res.status(400).json({msg: 'Error al obtener los clientes'})
    }
}

const getByIdClient = async (req, res) => {
    const id = req.params.id

    try {
        const data = await clienteGetById( id )

        logger.info('Cliente encontrado con su id:' + id)
        
        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al encontrar el cliente por el id')

        res.status(400).json({msg: 'Error al obtener el usuario por id'})
    }
}

const patchClient = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await clientePatch( id, inputData)

        logger.info('cliente actualizado exitosamente')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al actualizar el cliente')

        res.status(400).json({msg: 'Error al actualizar cliente'})
    }
}

module.exports = {
    postClient,
    getClient,
    getByIdClient,
    patchClient
}