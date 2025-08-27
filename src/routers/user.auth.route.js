const express = require('express')
const { register, login } = require('../controllers/auth.user.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.post('/register', register)
route.post('/login', authUser, login)

module.exports = route