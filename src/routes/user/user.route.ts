import * as express from 'express'
import UserController from '../../controllers/user.controller'
import RoleService from '../../services/role.service'

export = (() => {
	const userController: UserController = new UserController()
	const roleService = new RoleService()

	const router = express.Router()

	router.get('/:email', roleService.isInAnyRole(['admin']), userController.getUser)

	return router
})()
