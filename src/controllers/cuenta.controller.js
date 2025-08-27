const cuentaModel = require('../models/cuenta.model')

const postCuenta = async (req, res) => {
    const inputData = req.body

    try {
        const data = await cuentaModel.create( inputData )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear cuenta'})
    }
}

const getCuenta = async (req, res) => {
    try {
        const data = await cuentaModel.find()

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener cuentas'})
    }
}

const getByIdCuenta = async (req, res) => {
    const id = req.params.id

    try {
        const data = await cuentaModel.findById( id )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener la cuenta'})    
    }
}

const patchCuenta = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await cuentaModel.findByIdAndUpdate( id, inputData, {new: true} )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al actualizar cuenta'})
    }
}


module.exports = {
    postCuenta,
    getCuenta,
    getByIdCuenta,
    patchCuenta
}