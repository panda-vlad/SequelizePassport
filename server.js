const express = require('express');
const env = require('dotenv').config();
const exphbs = require('express-handlebars');
const middlewares = require('./middlewares/middlewares');
const models = require('./app/models')

const app = express();

models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine') 
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});

app.use(require('./app/routes/auth'))

//For BodyParser
app.use(middlewares.urlencoded);
app.use(middlewares.json);
app.use(middlewares.cors);
// For Passport
app.use(middlewares.setSession);
app.use(middlewares.initialize);
app.use(middlewares.passportSession);

app.listen(3000, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)

});