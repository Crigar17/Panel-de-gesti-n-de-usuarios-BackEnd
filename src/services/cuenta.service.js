const cuentaModel = require("../models/cuenta.model")

const insertCuenta = (newCuenta) => {
    return new cuentaModel(newCuenta)
}

const cuentGet = () => {
    return cuentaModel.find()
}

const cuentaGetById = (id) => {
    return cuentaModel.findById( id )
}

const cuentaPatch = (id, inputData) => {
    return cuentaModel.findByIdAndUpdate(id, inputData, {new: true})
}



module.exports = {
    insertCuenta,
    cuentGet,
    cuentaGetById,
    cuentaPatch
}