const express = require('express')

const UserRouter = express.Router()
const controller = require('./controllers')

UserRouter.post('/test',controller.signup)

// UserRouter.post('/', controller.createUser)



module.exports = UserRouter
