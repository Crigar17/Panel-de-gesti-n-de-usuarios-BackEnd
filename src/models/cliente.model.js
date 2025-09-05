const mongoose = require('mongoose')

const clientShema = new mongoose.Schema({
    id:{
        type: String,
    },
    nombreCompleto: {
        type: String,
        required: [true, 'El nombre es requerido'],
        timber: true
    },
    documento: {
        type: String,
        enum: ['CC', 'Int','Pasaporte'],
        required: [true, 'El documeto es requerido'],
        unique: [true, 'El docuemnto debe ser unico'],
        timber: true
    },
    telefono: {
        type: Number,
        unique: [true, 'El telefono debe ser unico'],
        required: [true, 'El telefono es obligatorio'],
        timber: true
    },
    direccion: {
        type: String,
        unique: [true, 'La direccion debe ser unica'],
        required: [true, 'La direccion es requerida'],
    },
    estado: {
        type: Boolean
    },
    fechaDeRegistro: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false,
    timestamps: true
})

const clientModel = mongoose.model('cliente',clientShema)

module.exports = clientModel