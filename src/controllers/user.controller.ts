import UserService from '../services/user.service'

class UserController {
	private _userService: UserService = new UserService()

	getUser = async (req, res) => {
		if (!req.params.email) return res.status(400).send('Bad Request')
		let user = await this._userService.getUserByEmail(req.params.email)
		if (!user) return res.status(404).send('Not found')
		return res.send(user)
	}
}

export default UserController