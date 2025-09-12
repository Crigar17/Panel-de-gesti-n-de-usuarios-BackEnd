const logger = require("../logs/logger")
const { insertCuenta, cuentGet, cuentaGetById, cuentaPatch } = require("../services/cuenta.service")

createCuenta = async (req, res) => {
    const inputData = req.body

    try {
        const cuentaNew = insertCuenta( inputData )

        const data = await cuentaNew.save()
        
        logger.info('Cuenta creada exitosamente')

        res.status(200).json(data)
    } 
    catch (error) {
        logger.error('Error al crear la cuenta')

        res.status(400).json({msg: 'Error al crear cuenta'})
    }
}

getCuenta = async (req, res) => {
    try {
        const data = await cuentGet()

        logger.info('Cuentas obtenidas exitosamente')

        res.status(200).json(data)
    } 
    catch (error) {
        logger.error('Error al obtener las cuentas')

        res.status(400).json({msg: 'Error al obtener las cuentas'})
    }
}

getCuentaById = async (req, res) => {
    const id = req.params.id

    try {
        const data = await cuentaGetById( id )

        logger.info('Cuenta encontrada con su id:' + id)

        res.status(200).json(data)
    } 
    catch (error) {
        logger.error('Error al encontrar la cuenta por su id')

        res.status(400).json({msg: 'Error al obtener la cuenta por id'})
    }
}

patchCuenta = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await cuentaPatch(id, inputData)
        
        logger.info('Cuenta actualizada exitosamente')

        res.status(200).json(data)

    } 
    catch (error) {
        logger.error('Error al actualizar la cuenta')

        res.status(400).json({msg: 'Erro al actualizar ciente'})
    }
}


module.exports = {
    createCuenta,
    getCuenta,
    getCuentaById,
    patchCuenta
}