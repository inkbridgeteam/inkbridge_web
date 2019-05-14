const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');

//Middlewares setup
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(compression());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(
  require('express-session')({
    secret: 'Made by InkBridge WebTeam',
    resave: false,
    saveUninitialized: false
  })
);

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

//Routes
app.get('/', (req, res) => {
  res.render('welcome');
});

app.get('/writersignup', (req, res) => {
  res.render('wsignup');
});

app.get('/readersignup', (req, res) => {
  res.render('rsignup');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/forgotpw', (req, res) => {
  res.render('ForgotPassword');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/readersignup', (req, res) => {
  res.render('rsignup');
});

app.get('/content', (req, res) => {
  res.render('content');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.get('/eauth', function(req, res) {
  res.render('emailauth');
});

app.get('/nextpage', function(req, res) {
  res.render('nextpage');
});

app.get('/signup1', function(req, res) {
  res.render('signup1');
});

app.get('/signup2', function(req, res) {
  res.render('signup2');
});

app.get('/signup3', function(req, res) {
  res.render('signup3');
});

app.get('/tag', (req, res) => {
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Tag.find(
      {
        name: regex
      },
      function(err, foundTags) {
        if (err) {
          console.log(err);
        } else {
          res.send({
            tags: foundTags
          });
        }
      }
    );
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`running on ${port}`);
});
