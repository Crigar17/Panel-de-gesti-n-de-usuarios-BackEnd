const { insertProducto, producGet, producGetById, producPatch } = require("../services/product.service")

createProductos = async (req, res) => {
    const inputData = req.body

    try {
        const newProducto = insertProducto( inputData )

        const data = await newProducto.save()

        res.status(200).json(data)
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al crear el producto'})
    }
}

getProducto = async (req, res) => {
    try {
        const data = await producGet()

        res.status(200).json(data)
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener los productos'})
    }
}

getProductoById = async (req, res) => {
    const id = req.params.id

    try {
        const data = await producGetById( id )

        res.status(200).json(data)
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al obtener el producto'})
    }
}

patchProduct = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await producPatch(id, inputData)
        
        res.status(200).json(data)
    } 
    catch (error) {
        res.status(400).json({msg: 'Error al actualizar productos'})
    }
}





module.exports = {
    createProductos,
    getProducto,
    getProductoById,
    patchProduct
}