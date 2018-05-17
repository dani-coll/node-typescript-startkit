import AuthenticationService from '../services/authentication.service'

class AuthenticationController {
	private _authenticationService: AuthenticationService = new AuthenticationService()

	login = async (req, res) => {
		if(!req.body.email) return res.status(400).send('Bad Request')
		if (req.session.email) return res.status(400).send('Already logged in')
		if (!await this._authenticationService.setSessionData(req)) {
			res.status(401).send('Unauthorized')
		}
		return res.send('Successfully logged in')
	}

	logout = (req, res) => {
		req.session.destroy()
		res.send('Successfully logged out')
	}
}

export default AuthenticationController