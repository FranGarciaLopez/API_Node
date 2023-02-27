const chai = require('chai');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

const app = require('../app.js').app

describe('Suite de prueba e2e para el curso', () => {
    it('should return Hello World!', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            console.log('A');
            chai.assert.equal(res.text,  'Hello World!');
            done();
        });
        console.log('B');
    })
})
