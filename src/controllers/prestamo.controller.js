const logger = require("../logs/logger")
const { insertPrestamo, prestamoGet, prestamoId, prestamoPathc } = require("../services/prestamo.service")

createPrestamo = async (req, res) => {
    const inputData = req.body

    try {
        const prestamoNew = insertPrestamo( inputData )

        const data = await prestamoNew.save()

        logger.info('Prestamo creado exitosamente')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al crear el prestamo')

        res.status(400).json({msg: 'Error al crear el prestamo'})
    }
}

getPrestamo = async (req, res) => {
    try {
        const data = await prestamoGet()

        logger.info('Prestamos obtenidos exitosamente')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al obtener los prestamos')
        
        res.status(400).json({msg: 'Error al obtener los prestamos'})
    }
}

getPrestamoById = async (req, res) => {
    const id = req.params.id
    
    try {
        const data = await prestamoId( id )

        logger.info('Prestamo encontrado con su id:' + id)

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al obtener el prestamos por su id')

        res.status(400).json({msg: 'Error al obtener el prestamo'})
    }
}

patchPrestamo = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await prestamoPathc(id, inputData)

        logger.info('Prestamo actualizado exitosamente')

        res.status(200).json( data )
    } 
    catch (error) {
        logger.error('Error al actualizar el prestamo')
        
        res.status(400).json({msg: 'Error al actualizar el prestamo'})
    }
}


module.exports = {
    createPrestamo,
    getPrestamo,
    getPrestamoById,
    patchPrestamo
}