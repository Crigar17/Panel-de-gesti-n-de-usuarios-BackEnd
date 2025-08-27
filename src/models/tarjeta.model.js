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
const tarjetaModel = producto.discriminator("Tarjeta", tarjetaSchema);

module.exports= tarjetaModel
