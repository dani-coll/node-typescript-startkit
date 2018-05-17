import * as supertest from 'supertest'
import * as session from 'supertest-session'

import app from '../app'

const adminSession = session(app)

describe('1 - Login', () => {
	it('should return success', () =>
		adminSession
			.post('/api/login')
			.send({
				email: 'dummy@mailinator.com'
			})
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=utf-8')
	)
})

describe('2 - Login', () => {
	it('should return 400', () =>
		adminSession
			.post('/api/login')
			.send({
				email: 'dummy@mailinator.com'
			})
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.expect(400)
			.expect('Content-Type', 'text/html; charset=utf-8')
	)
})