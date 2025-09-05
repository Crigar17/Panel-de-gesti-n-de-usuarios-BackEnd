const express = require('express')
const { postPrestamo, getPrestamo, getByIdPrestamo, patchPrestamo } = require('../controllers/prestamo.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/',authUser, postPrestamo)
route.get('/', authUser, getPrestamo)
route.get('/:id', authUser, getByIdPrestamo)
route.patch('/:id', authUser, patchPrestamo)



module.exports = route