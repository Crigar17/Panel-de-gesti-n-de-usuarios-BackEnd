const { insertCuenta, cuentGet, cuentaGetById, cuentaPatch } = require("../services/cuenta.service")

createCuenta = async (req, res) => {
    const inputData = req.body

    try {
        const cuentaNew = insertCuenta( inputData )

        const data = await cuentaNew.save()
        
        res.status(200).json(data)
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear cuenta'})
    }
}

getCuenta = async (req, res) => {
    try {
        const data = await cuentGet()

        res.status(200).json(data)
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener las cuentas'})
    }
}

getCuentaById = async (req, res) => {
    const id = req.params.id

    try {
        const data = await cuentaGetById( id )

        res.status(200).json(data)
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener la cuenta por id'})
    }
}

patchCuenta = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await cuentaPatch(id, inputData)

        res.status(200).json(data)

    } 
    catch (error) {
        res.status(400).json({msg: 'Erro al actualizar ciente'})
    }
}


module.exports = {
    createCuenta,
    getCuenta,
    getCuentaById,
    patchCuenta
}