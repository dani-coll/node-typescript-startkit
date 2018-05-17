import User from '../models/User'
import UserService from './user.service'

class RoleService {
	private _userService: UserService = new UserService()

	isInAnyRole(roles: string[]) {
		return async (req, res, next) => {
			const user: User = await this._userService.getUserByEmail(req.session.email)
			if (user && roles.some(role => role === user.role)) next()
			else res.status(401).send('Unauthorized')
		}
	}
}

export default RoleService