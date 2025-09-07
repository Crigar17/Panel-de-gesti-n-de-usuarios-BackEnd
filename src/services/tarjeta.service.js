const tarjetaModel = require("../models/tarjeta.model")

insertTarjeta = (newTrajeta) => {
    return new tarjetaModel( newTrajeta )
}

tarejtaGet = () => {
    return tarjetaModel.find()
}

tarjetaGetById = (id) => {
    return tarjetaModel.findById(id)
}

tarjetaPatch = (id, inputData) => {
    return tarjetaModel.findByIdAndUpdate(id, inputData, {new: true})
}

module.exports = {
    insertTarjeta,
    tarejtaGet,
    tarjetaGetById,
    tarjetaPatch
}