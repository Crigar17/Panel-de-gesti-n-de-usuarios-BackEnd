const express = require('express')
const { register, login } = require('../controllers/auth.user')

const route = express.Router()

route.post('/', register)
route.get('/', login)

module.exports = route