const JWTStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


SECRET_KEY = 'secretPassword'

module.exports = passport => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: SECRET_KEY
    }
    passport.use(new JWTStrategy(opts, (decoded, done) => {
        console.log('decoded jwt', decoded);
        return done(null, false);
    }));
}