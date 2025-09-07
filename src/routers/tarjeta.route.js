const express = require('express')
const { createTarjeta, getTarjeta, getTarjetaById, patchTarjeta } = require('../controllers/tarjeta.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', createTarjeta)
route.get('/', authUser, getTarjeta)
route.get('/:id', authUser, getTarjetaById)
route.patch('/:id', authUser, patchTarjeta)

module.exports = route