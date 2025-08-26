const express = require('express')
const { postProduc, getProduc, getByIdProduc, patchProduc } = require('../controllers/produc.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', postProduc, authUser)
route.get('/', getProduc, authUser)
route.get('/:id', getByIdProduc, authUser)
route.patch('/:id', patchProduc, authUser)


module.exports = route