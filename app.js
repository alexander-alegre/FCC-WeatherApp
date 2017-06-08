let express = require('express');
let app = express();

// set port for heroku deployment
const PORT = process.env.PORT || 3000;
// static files
app.use(express.static('public'))
// set templating engine
app.set('view engine', 'pug');
// set views folder
app.set('views', './views');

// GET /
app.get('/', function(req, res, next) {
    res.render('home', { title: 'FCC Weather App' });
    if(req.headers['x-forwarded-proto'] == 'https') {
        res.redirect('https://alex-fcc-weather-app.herokuapp.com/'+req.url)
    } else {
        next();
    }
});

// listen on port 3000 or heroku port
app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
});
