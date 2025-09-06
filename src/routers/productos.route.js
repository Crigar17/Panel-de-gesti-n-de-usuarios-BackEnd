const express = require('express')
const { createProductos, getProducto, getProductoById, patchProduct } = require('../controllers/productos.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/',  createProductos)
route.get('/', authUser, getProducto)
route.get('/:id', authUser, getProductoById)
route.patch('/:id', authUser, patchProduct)


module.exports = route