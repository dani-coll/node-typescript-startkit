import * as supertest from 'supertest'
import * as session from 'supertest-session'

import app from '../app'

const adminSession = session(app)

describe('Admin Tests \n 1 - getting a user', () => {
	it('should return unauthorized', () =>
		adminSession
			.get('/api/user?id=a0ece5db-cd14-4f21-812f-966633e7be86')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(401)
	)
})

describe('2 - Login', () => {
	it('should return success', () =>
		adminSession
			.post('/api/login')
			.send({
				email: 'manningblankenship@quotezart.com'
			})
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=utf-8')
	)
})

describe('3 - Login', () => {
	it('should return 400', () =>
		adminSession
			.post('/api/login')
			.send({
				email: 'manningblankenship@quotezart.com'
			})
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.expect(400)
			.expect('Content-Type', 'text/html; charset=utf-8')
	)
})

const userId = 'a0ece5db-cd14-4f21-812f-966633e7be86'
describe('4 - getting a user', () => {
	it('should return the user', (done) => {
		adminSession
			.get(`/api/user?id=${userId}`)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err)
				if (res.body.id === userId) done()
			  })
	})
})

describe('5 - getting a user', () => {
	it('should return not found', () =>
		adminSession
			.get('/api/user?id=sadsads')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(404)
	)
})

const username = 'Whitley'
describe('6 - getting a user', () => {
	it('should return the user', (done) => {
		adminSession
			.get(`/api/user?name=${username}`)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err)
				if (res.body.name === username) done()
			  })
	})
})

describe('7 - getting the user policies', () => {
	it('should return the user policies', (done) => {
		adminSession
			.get('/api/user/Britney/policies')
			.expect(200)
			.end((err, res) => {
				if (err) return done(err)
				if (Array.isArray(res.body)) done()
			})
	})
})

describe('8 - User linked to the policy', () => {
	it('should return the user linked to the policy', (done) => {
		adminSession
			.get('/api/policy/56b415d6-53ee-4481-994f-4bffa47b5239/user')
			.expect(200)
			.end((err, res) => {
				if (err) return done(err)
				if (res.body && res.body.id && res.body.role) done()
			})
	})
})