const express = require('express')
const { postClient, getClient, getByIdClient, patchClient } = require('../controllers/cliente.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/', postClient, authUser)
route.get('/', getClient, authUser)
route.get('/:id', getByIdClient, authUser)
route.patch('/id', patchClient, authUser)

module.exports = route