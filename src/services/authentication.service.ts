import User from '../models/User'
import UserService from './user.service';

class AuthenticationService {
	private _userService: UserService = new UserService()

	async setSessionData(req): Promise<User> {
		const user: User = await this._userService.getDummyUser()
		if (user) {
			req.session.email = user.email
			req.session.role = user.role
		}
		return user
	}
}

export default AuthenticationService