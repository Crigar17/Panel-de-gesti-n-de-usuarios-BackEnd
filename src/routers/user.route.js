const express = require('express')
const { patchUser, getUserById } = require('../controllers/user.controller.js')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.get('/:id', authUser, getUserById)
route.patch('/:id', authUser, patchUser)


module.exports = route