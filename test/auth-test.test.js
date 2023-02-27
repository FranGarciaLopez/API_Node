const chai = require('chai');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

const app = require('../app.js').app

describe('Suite de prueba auth', () => {
    it('should return 401 when no jwt token available', (done) => {
        //Cuando la llamada no tiene correctamente la llave
        chai.request(app)
        .get('/team')
        .end((err, res) => {
            chai.assert.equal(res.statusCode, 401);
            done();
        });
    });
    it('should return 200 when jwt token is valid', (done) => {
        //Cuando la llamada no tiene correctamente la llave
        chai.request(app)
        .post('/login')
        .end((err, res) => {
            chai.request(app)
            .get('/team')
            .set('Authorization', `JWT ${res.body.token}`)
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 200);
                done();
            });
        });
        
    });
});
