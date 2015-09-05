var request = require('supertest'),
    app     = require('../src/app.js')

describe('GET /', function() {
	it('should return 200 OK', function(done) {
		request(app)
		.get('/')
		.expect(200, done)
	})
})

describe('GET /search', function() {
	it('should return 200 OK', function(done) {
		request(app)
		.get('/')
		.expect(200, done)
	})
})

describe('GET /treatment', function() {
	it('should return 200 OK', function(done) {
		request(app)
		.get('/')
		.expect(200, done)
	})
})

describe('GET /pageNotFound', function() {
	it('should return 404', function(done) {
		request(app)
		.get('/pageNotFound')
		.expect(404, done)
	})
})