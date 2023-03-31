const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../auth')(passport);

const temaControllers = require('../controllers/teams');
const { getUser } = require('../controllers/users');

router.route('/')
          .get(passport.authenticate('jwt', {session:false}),
                    (req, res, next) => {
                              let user = getUser(req.user.userId);
                              res.status(200).json({
                                        trainer: user.userName,
                                        team: temaControllers.getTeamOfUser(req.body.user)
                              })
                    })
                    
          .put((req, res) => {
                    temaControllers.setTeam(req.body.user, req.body.team);
          })


router.route('/pokemons')
          .post(() => {
                    res.status(200).send('Hello World!');
          } )

          
router.route('/pokemons/:pokeid')
          .delete(() => {
                    res.status(200).send('Hello World!');
          })

exports.router = router;