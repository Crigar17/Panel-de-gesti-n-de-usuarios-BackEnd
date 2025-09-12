const { default: mongoose } = require("mongoose");

const tarjetaSchema = new mongoose.Schema({

numeroTarjeta: { 
    type: String, 
    unique: true, 
    required: true 
},

tipoTarjeta: { 
    type: String, 
    enum: ["crédito", "débito"], 
    required: true 
},
cliente:{
    type: mongoose.Schema.ObjectId,
    ref: "cliente"
},
limiteCredito: { 
    type: Number, 
    default: 0 
},

fechaVencimiento: { 
    type: Date, 
    required: true 
},

estadoTarjeta: {
    type: String,
    enum: ["activa", "bloqueada", "vencida"],
    default: "activa",
},
});
const tarjetaModel = mongoose.model("tarjeta", tarjetaSchema);

module.exports= tarjetaModel
