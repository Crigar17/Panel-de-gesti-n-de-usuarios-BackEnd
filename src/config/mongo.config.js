const mongoose = require('mongoose');
const logger = require('../logs/logger.js');

async function dbConnect(){
    try {
        await mongoose.connect(process.env.DB_URI)
        logger.info('Base de datos conectada');
    } 
    catch (error) {
        logger.error('Error al conectar a la base de datos')
    }
}

module.exports = dbConnect