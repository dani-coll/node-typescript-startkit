
import * as express from 'express'

import AuthenticationController from '../controllers/authentication.controller'


const router = express.Router()

const authenticationController = new AuthenticationController()

router.use('/login', authenticationController.login)
router.use('/logout', authenticationController.logout)

export = router