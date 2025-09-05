const express = require('express')
const { postCuenta, getCuenta, getByIdCuenta, patchCuenta } = require('../controllers/cuenta.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', authUser, postCuenta)
route.get('/', authUser, getCuenta)
route.get('/:id', authUser, getByIdCuenta)
route.patch('/:id', authUser, patchCuenta)


module.exports = route