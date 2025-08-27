const prestamoSchema = new mongoose.Schema({
monto: { 
    type: Number, 
    required: true 
},

tasaInteres: { 
    type: Number, 
    required: true 
}, // aqui pense en colocar solo el numero y no colocando el %

plazo: { 
    type: Number, 
    required: true 
}, // aqui el prestamo es en meses

estadoPrestamo: {
    type: String,
    enum: ["vigente", "pagado", "en mora"],
    default: "vigente",
},
});
const prestamoModel = producto.discriminator("Prestamo", prestamoSchema);

module.exports = prestamoModel;