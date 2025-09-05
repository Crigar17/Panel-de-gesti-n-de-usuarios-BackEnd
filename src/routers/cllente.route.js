const express = require('express')
const { postClient, getClient, getByIdClient, patchClient } = require('../controllers/cliente.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/',postClient)
route.get('/', authUser, getClient)
route.get('/:id', authUser, getByIdClient)
route.patch('/:id', authUser, patchClient)

module.exports = route