const productModel = require('../models/product.model')

const postProduc = async (req, res) => {
    const inputData = req.body

    try {
        const data = await productModel.create( inputData )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear producto'})
    }
} 

const getProduc = async (req, res) => {
    try {
        const data = await productModel.find()

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener productos'})
    }
} 

const getByIdProduc = async (req, res) => {
    const id = req.params.id

    try {
        const data = await productModel.findById( id )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al encontrar producto'})
    }
} 

const patchProduc = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await productModel.findByIdAndUpdate( id, inputData, {new: true} )

        res.status(200).json( data )
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al actualizar productos'})
    }
}

module.exports = {
    postProduc,
    getProduc,
    getByIdProduc,
    patchProduc
}
