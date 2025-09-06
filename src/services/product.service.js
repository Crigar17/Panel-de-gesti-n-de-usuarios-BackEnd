const productModel = require("../models/producto.model.js")

const insertProducto = (newProduc) => {
    return new productModel( newProduc )
}

const producGet = () => {
    return productModel.find()
}

const producGetById = (id) => {
    return productModel.findById( id )
}

const producPatch = (id, inputData) => {
    return productModel.findByIdAndUpdate(id, inputData, {new: true})
}

module.exports = {
    insertProducto,
    producGet,
    producGetById,
    producPatch
}

