const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo.config.js')
const logger = require('./logs/logger.js')

const app = express()

const port = process.env.PORT

dbConnect()

app.use( express.json() )

app.use( cors() )

app.use('/api/auth/user', require('./routers/user.auth.route.js'))
app.use('/api/user', require('./routers/user.route.js'))
app.use('/api/cliente', require('./routers/cllente.route.js'))
app.use('/api/productos', require('./routers/productos.route.js'))
app.use('/api/cuenta', require('./routers/cuenta.route.js'))
app.use('/api/prestamo', require('./routers/prestamo.route.js'))
app.use('/api/tarjeta', require('./routers/tarjeta.route.js'))




app.listen(port,()=>{
    try {
        logger.info('Servidor corriendo en el puerto:', port);
    } 
    catch (error) {
        logger.error('Error al conectar al servidor')
    }
})