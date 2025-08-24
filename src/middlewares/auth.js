const {verifyToken} = require('../helpers/auth')

const authUser = (req, res, next) => {
    const token = req.header('x-token')

    if( !token ){
        return res.json({msg: 'Error al obtener token'})
    }

    const payload = verifyToken( token )

    try {
        console.log({payload});

        delete payload.iat;
        delete payload.exp

        req.authUser = payload

        next()
    } 
    catch (error) {
        res.json({msg: "Error al autenticar usuario"})
    }
}

module.exports = authUser