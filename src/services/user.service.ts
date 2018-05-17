import User from '../models/User'

class UserService {
	async getUserByEmail(email): Promise<User> {
		let user: User = new User()
		user.email = email
		user.role = "admin"
		return user
	}
}

export default UserService