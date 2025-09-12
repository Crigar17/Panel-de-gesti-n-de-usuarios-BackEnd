const logger = require("../logs/logger")
const { insertProducto, producGet, producGetById, producPatch } = require("../services/product.service")

createProductos = async (req, res) => {
    const inputData = req.body

    try {
        const newProducto = insertProducto( inputData )

        const data = await newProducto.save()

        logger.info('Producto creado exitosamente')

        res.status(200).json(data)
    } 
    catch (error) {
        logger.error('Error al crear el prestamo')

        res.status(400).json({msg: 'Error al crear el producto'})
    }
}

getProducto = async (req, res) => {
    try {
        const data = await producGet()

    logger.info('Productos encontrados exitosamente')

        res.status(200).json(data)
    } 
    catch (error) {
        logger.error('Error al encontrar los productos')

        res.status(400).json({msg: 'Error al obtener los productos'})
    }
}

getProductoById = async (req, res) => {
    const id = req.params.id

    try {
        const data = await producGetById( id )

        logger.info('Producto encontrado con su id:' + id)

        res.status(200).json(data)
    } 
    catch (error) {
        logger.error('Error al encontrar el producto')

        res.status(400).json({msg: 'Error al obtener el producto'})
    }
}

patchProduct = async (req, res) => {
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await producPatch(id, inputData)
        
        logger.info('Producto actualizado exitosamente')

        res.status(200).json(data)
    } 
    catch (error) {
        logger.error('Error al actualizar el producto')

        res.status(400).json({msg: 'Error al actualizar productos'})
    }
}





module.exports = {
    createProductos,
    getProducto,
    getProductoById,
    patchProduct
}