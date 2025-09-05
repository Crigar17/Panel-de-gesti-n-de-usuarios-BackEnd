const clientModel = require("../models/cliente.model")

const insertCliente = (newCliente) => {
    return new clientModel( newCliente )
}

const clienteGet = () => {
    return clientModel.find()
}

const clienteGetById = ( id ) => {
    return clientModel.findById( id )
}

const clientePatch = (id, inputData) => {
    return clientModel.findByIdAndUpdate(id, inputData, {new: true})
}




module.exports = {
    insertCliente,
    clienteGet,
    clienteGetById,
    clientePatch
}