const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo.config')

const app = express()

const port = process.env.PORT

dbConnect()

app.use( express.json() )

app.use( cors() )

app.use('api/auth/user', require('./routers/user.auth.route'))




app.listen(port,()=>{
    try {
        console.log('Servidor corriendo en el puerto:', port);
    } 
    catch (error) {
        console.error('Error al conectar al servidor')
    }
})