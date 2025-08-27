const express = require('express')
const { postCuenta, getCuenta, getByIdCuenta, patchCuenta } = require('../controllers/cuenta.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', postCuenta,authUser)
route.get('/', getCuenta, authUser)
route.get('/:id', getByIdCuenta, authUser)
route.patch('/:id', patchCuenta, authUser)


module.exports = route