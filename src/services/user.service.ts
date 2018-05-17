import User from '../models/User'

class UserService {
	async getDummyUser(): Promise<User> {
		let user: User = new User()
		user.email = "dummy@mailinator.com"
		user.role = "admin"
		return user
	}
}

export default UserService