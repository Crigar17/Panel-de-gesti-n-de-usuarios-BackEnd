const express = require('express')
const { postTarjeta, getTarjeta, getByIdTarjeta, patchTarjeta } = require('../controllers/tarjeta.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', postTarjeta, authUser)
route.get('/', getTarjeta)
route.get('/:id', getByIdTarjeta)
route.patch('/:id', patchTarjeta)



module.exports = route