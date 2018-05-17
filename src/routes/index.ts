
import * as express from 'express'

import AuthenticationController from '../controllers/authentication.controller'

import userRouter = require('./user/user.route')

const router = express.Router()

router.use('/user', userRouter)

const authenticationController = new AuthenticationController()

router.use('/login', authenticationController.login)
router.use('/logout', authenticationController.logout)

export = router