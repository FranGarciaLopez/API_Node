const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suite de pruebas teams', () => {
          it('should return the user team', (done) => {
                    // Cuando la llamada no tiene correctamente la llave
                    chai.request(app)
                              .post('/auth/login')
                              .set('content-type', 'application/json')
                              .send({userName: 'mastermind', password: '4321'})
                              .end((err, res) => {      
                                        //Expect valid login
                                        chai.assert.equal(res.statusCode, 200);
                                        chai.request(app)
                                        .get('/teams')
                                        .set('Authorization', `JWT ${res.body.token}`)
                                        .end((err, res) => {
                                                  // tiene equipo con charizard y blastoise
                                                  // { trainer: 'mastermind', team: [Pokemon]}
                                                  chai.assert.equal(res.statusCode, 200);
                                                  chai.assert.equal(res.body.trainer, 'mastermind');
                                                  chai.assert.equal(res.body.team.length, 2);
                                                  chai.assert.equal(res.body.team[0].name, 'Charizard');
                                                  chai.assert.equal(res.body.team.length, 'Blastoise');

                                                  done();
                                        });
                              });
          });

    
});