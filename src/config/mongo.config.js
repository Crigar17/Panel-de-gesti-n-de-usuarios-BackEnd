const mongoose = require('mongoose')

async function dbConnect(){
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Base de datos conectada');
    } 
    catch (error) {
        console.error('Error al conectar a la base de datos')
    }
}

module.exports = dbConnect