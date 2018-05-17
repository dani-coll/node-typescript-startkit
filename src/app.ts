import * as express from 'express'
import * as session from 'express-session'
import * as bodyParser from 'body-parser'

import * as masterRouter from './routes/index'

class App {
	public express

	constructor() {
		this.express = express()
		this.express.use(bodyParser.urlencoded({
			extended: false
		}))
		this.express.use(session(
			{
				secret: 'd4n13l',
				resave: true,
				saveUninitialized: true
			}
		))
		this.mountRoutes()
	}

	private mountRoutes(): void {
		this.express.use('/api', masterRouter)
	}
}

export default new App().express