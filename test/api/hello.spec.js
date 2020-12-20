const should = require('should')
const request = require('supertest')

const app = require('../../index')

describe('GET /hello', () => {
    it('GET /api/v1/hello - success[200]', (done) => {
        request(app)
            .get('/api/v1/hello')
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                should(res.body).have.properties(['hello'])
                should(res.body.hello).have.properties(['msg'])

                return done()
            })
    })
})
