const express = require('express')
const { createPrestamo, getPrestamo, getPrestamoById, patchPrestamo } = require('../controllers/prestamo.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', createPrestamo)
route.get('/', authUser, getPrestamo)
route.get('/:id', authUser, getPrestamoById)
route.patch('/:id', patchPrestamo)

module.exports = route