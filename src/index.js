const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo.config')

const app = express()

const port = process.env.PORT

dbConnect()

app.use( express.json() )

app.use( cors() )

app.use('/api/auth/user', require('./routers/user.auth.route'))
app.use('/api/user', require('./routers/user.route'))
// app.use('/api/cliente', require('./routers/cllente.route'))
// app.use('/api/producto', require('./routers/producto.route'))
// app.use('/api/cuenta', require('./routers/cuenta.route'))
// app.use('/api/tarjeta', require('./routers/tarjeta.route'))
// app.use('/api/prestamo', require('./routers/prestamo.route'))
// app.use('/api/historial', require('./routers/historial.route'))




app.listen(port,()=>{
    try {
        console.log('Servidor corriendo en el puerto:', port);
    } 
    catch (error) {
        console.error('Error al conectar al servidor')
    }
})