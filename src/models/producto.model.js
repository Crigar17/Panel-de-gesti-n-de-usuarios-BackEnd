const mongoose = require('mongoose')

const productShema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["account", "card", "loan"],
        required: true,
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive", "closed"],
        default: "active",
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
},{}
)

const productModel = mongoose.model('producto', productShema)

module.exports = productModel