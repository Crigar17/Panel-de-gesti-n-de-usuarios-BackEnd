const express = require('express')
const { patchUser } = require('../controllers/user.controller')
const authUser = require('../middlewares/auth')

const route = express.Router()

route.get('/:id', getUserById, authUser)
route.patch('/:id,', patchUser, authUser)


module.exports = route