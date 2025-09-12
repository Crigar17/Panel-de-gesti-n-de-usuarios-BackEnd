const logger = require("../logs/logger")
const { insertTarjeta, tarejtaGet, tarjetaGetById, tarjetaPatch } = require("../services/tarjeta.service")

createTarjeta = async (req, res) => {
    const inputData = req.body

    try {
        const tarjetaNew = insertTarjeta( inputData )

        const data = await tarjetaNew.save()

        logger.info('Tarjeta creada exitosamente')
        
        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al crear la tarjeta')

        res.status(400).json({msg: 'Error al crear tarjeta'})
    }
}

getTarjeta = async (req, res) => {
    try {
        const data = await tarejtaGet()
        
        logger.info('Tarjetas encontradas exitosamente')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al encontrar las tarjetas')

        res.status(400).json({msg: 'Error al obtener las tarjetas'})
    }
}

getTarjetaById = async (req, res) => {
    const id = req.params.id

    try {
        const data =  await tarjetaGetById( id )

        logger.info('Tarjeta encontrada con su id:' + id)

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al encontrar la tarjeta')

        res.status(400).json({msg: 'Error al obtener tarjeta'})
    }
}

patchTarjeta = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await tarjetaPatch(id, inputData)
        
        logger.info('Tarjeta actualizada exitosamente')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al actualizar tarjeta')

        res.status(200).json({msg: 'Error al actualizar tarjeta'})
    }
}



module.exports = {
    createTarjeta,
    getTarjeta,
    getTarjetaById,
    patchTarjeta
}