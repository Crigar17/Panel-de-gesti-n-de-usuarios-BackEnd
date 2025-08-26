const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre de usuario es requerido']
    },
    email:{
        type: String,
        unique: [true, 'El correo debe ser unico'],
        required: [true, 'El correo debe ser unico'],
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        unique: [true, 'La contraseña debe ser unica'],
        required: [true, 'La contraseña es obligatoria'],
        lowercase: true,
        trim: true
    },
    rol:{
        type: String,
        enum:[ 'admin' , 'asesor' ],
        default: 'asesor'
    },
    permission:{
        type: [String],
        default: function(){
            return []
        }
    },
    isActive:{
        type: Boolean,
        default: true
    }
},{
    versionKey: false,
    timestamps: true
})

const userModel = mongoose.model('user', userShema)

module.exports = userModel