const bcrypt = require('bcrypt')

const userModel = require('../models/user.model')
const { generateToken } = require('../helpers/auth')
const { insertUser, readUserByEmail } = require('../services/auth.user.service')

const register = async (req, res) => {
    const inputData = req.body

    try {
        let rondaEncriptacion = 10
        const claveEncriptada = await bcrypt.hash(inputData.password, rondaEncriptacion)
        inputData.password = claveEncriptada
        
        const userNew = insertUser( inputData );
        const data = await userNew.save();
        res.json( data )
    } 
    catch (error) {
        console.error(error)
        res.status(400).json({msg: 'Error al registar usuario'})
    }
}

const login = async (req, res) => {
    const inputData = req.body

    try {
        const data = await readUserByEmail( inputData.email );
        if( !data ) return res.status(400).json('Usuario no encontrado')

        console.log('input', inputData);
        console.log('mongo', user);

        const userPassword = await bcrypt.compare(inputData.password, user.password)

        if( userPassword ){
            const token = generateToken(inputData)
            const userData = data.toObject()
            return res.status(200).json({token: token, msg: 'Logueado', user: userData})
        }
        else{
            return res.send({msg: 'Contraseña incorrecta'})
        }
    } 
    catch (error) {
        res.status(400).json({msg:"Error al loguear"})
    }
}

module.exports = {
    register,
    login
}