const express = require('express')
const { postPrestamo, getPrestamo, getByIdPrestamo, patchPrestamo } = require('../controllers/prestamo.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/',authUser, postPrestamo)
route.get('/', getPrestamo, authUser)
route.get('/:id', getByIdPrestamo, authUser)
route.patch('/:id', patchPrestamo, authUser)



module.exports = route