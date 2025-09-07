const prestamoModel = require("../models/prestamo.model")

const insertPrestamo = ( newPrestamo ) => {
    return new prestamoModel( newPrestamo )
}

const prestamoGet = () => {
    return prestamoModel.find()
}

const prestamoId = ( id ) => {
    return prestamoModel.findById( id )
}

const prestamoPathc =  (id, inputData) => {
    return prestamoModel.findByIdAndUpdate(id, inputData, {new: true})
}


module.exports = {
    insertPrestamo,
    prestamoGet,
    prestamoId,
    prestamoPathc
}