const mongoose = require('mongoose')

const cuentaSchema = new mongoose.Schema({
numeroCuenta: {
    type: String,
    unique: true,
    required: true,
},
tipoCuenta: {
    type: String,
    enum: ["ahorros", "corriente", "nómina", "inversión"],
    required: true,
},
saldo: {
    type: Number,
    default: 0,
},
moneda: {
    type: String,
    default: "COP",
},
});

const cuentaModel = mongoose.model('cuenta', cuentaSchema)

module.exports = cuentaModel
