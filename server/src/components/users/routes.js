const express = require('express')

const UserRouter = express.Router()
const controller = require('./controllers')

UserRouter.get('/', controller.getAll)

UserRouter.post('/', controller.createUser)



module.exports = UserRouter
