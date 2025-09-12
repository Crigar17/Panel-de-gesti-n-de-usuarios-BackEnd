
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const { generateToken } = require('../helpers/auth');
const { insertUser, readUserByEmail } = require('../services/auth.user.service');

const register = async (req, res) => {
    const inputData = req.body;

    console.log('register');

    try {
        let rondaEncriptacion = 10;
        const claveEncriptada = await bcrypt.hash(inputData.password, rondaEncriptacion);
        inputData.password = claveEncriptada;
        
        // CORRECCIÓN: Agregar await aquí
        const userNew = insertUser(inputData);
        const data = await userNew.save();
        res.json(data);
    } 
    catch (error) {
        console.error('Error en registro:', error);
        res.status(400).json({msg: 'Error al registrar usuario', error: error.message});
    }
}

const login = async (req, res) => {
    const inputData = req.body;

    try {
        // CORRECCIÓN: Agregar await si readUserByEmail es async
        const data = await readUserByEmail(inputData.email);
        if (!data) return res.status(400).json({msg: 'Usuario no encontrado'});

        console.log('Datos del usuario encontrado:', data);

        // Verificar que data.password existe
        if (!data.password) {
            return res.status(500).json({msg: 'Error en los datos del usuario'});
            }
        
        const userPassword = bcrypt.compare(inputData.password, data.password)
        console.log('Resultado comparación:', userPassword);

        if (userPassword) {
            // CORRECCIÓN: Generar token con los datos correctos (probablemente data en lugar de inputData)
            const token = generateToken({
                id: data._id,
                email: data.email,
                // otros datos que necesites en el token
            });
            
            const userData = data.toObject ? data.toObject() : data;
            // Eliminar la contraseña del objeto de respuesta por seguridad
            delete userData.password;
            
            return res.status(200).json({
                token: token, 
                msg: 'Logueado', 
                user: userData
            });
        } else {
            return res.status(401).json({msg: 'Contraseña incorrecta'});
        }
    }
    catch (error) {
        console.error('Error en login:', error);
        res.status(400).json({msg: "Error al loguear", error: error.message});
    }
}

module.exports = {
    register,
    login
};