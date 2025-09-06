const express = require('express')
const { createCuenta, getCuenta, getCuentaById, patchCuenta } = require('../controllers/cuenta.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', createCuenta)
route.get('/', authUser, getCuenta)
route.get('/:id', authUser, getCuentaById)
route.patch('/:id', authUser, patchCuenta)

module.exports = route