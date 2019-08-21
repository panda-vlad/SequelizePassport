const bodyParser = require('body-parser');
const passport   = require('passport');
const session    = require('express-session');

const json = () => bodyParser.json();
const urlencoded = () => bodyParser.urlencoded({
    extended: true
});
const cors = () => cors()

const setSession = () => session({ secret: 'keyboard cat',resave: true, saveUninitialized:true});

const initialize = () => passport.initialize();
// persistent login sessions
const passportSession = () => passport.session();

module.exports = { 
    json,
    urlencoded,
    cors,
    setSession,
    initialize,
    passportSession
}