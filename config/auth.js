//require npm mpackages 
const passport = require('passport') //checks out
const bcrypt = require('bcrypt') //checks out
const jwt = require('jsonwebtoken') //checks out

const secret = process.env.JWT_SECRET || 'enderBender' //checks out
const { Strategy, ExtractJwt } = require('passport-jwt') //checks out

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//checks out
    secretOrKey: secret, //checks out
}

const User = require('../models/user') //checks out

const strategy = new Strategy(opts, function (jwt_payload, done) { //checks out
    User.findById(jwt_payload.id) //checks out
        .then((user) => done(null, user)) //checks out
        .catch((err) => done(err)) //checks out
})

passport.use(strategy) //checks out
passport.initialize() //checks out

const requireToken = passport.authenticate('jwt', { session: false }) //checks out

const createUserToken = (req, user) => { //checks out
    if ( //checks out
        !user || //checks out
        !req.body.credentials.password || //checks out
        !bcrypt.compareSync(req.body.credentials.password, user.password) //checks out
    ) { //checks out
        const err = new Error('Inncorrect username or password') //checks out
        err.statusCode = 422 //checks out
        throw err //checks out
    }
    return jwt.sign({id : user._id }, secret, { expiresIn: 36000}) //checks out
}

module.exports = {
    requireToken,
    createUserToken,
}