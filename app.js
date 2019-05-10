var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Tag = require("./models/TagSchema");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: "Made by InkBridge WebTeam",
    resave: false,
    saveUninitialized: false
}));
mongoose.connect("mongodb://InkBridge:iSXvGThVEsF9BgS@ds113136.mlab.com:13136/anmol", {
    useNewUrlParser: true
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

app.get("/", (req, res) => {
    res.render("welcome");
});

app.get("/writersignup", (req, res) => {
    res.render("wsignup");
});

app.get("/readersignup", (req, res) => {
    res.render("rsignup");
});

app.get("/login", (req, res) => {
    res.render("Login");
});

app.get("/forgotpw", (req, res) => {
    res.render("ForgotPassword");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/homenew", (req, res) => {
    res.render("homenew");
});

app.get("/readersignup", (req, res) => {
    res.render("rsignup");
});

app.get("/content", (req, res) => {
    res.render("content");
});

app.get("/profile", (req, res) => {
    res.render("profile");
});

app.get("/eauth", function(req, res){
    res.render("emailauth");
});

app.get("/content2", function(req, res){
    res.render("content2");
});

app.get("/nextpage", function(req, res){
    res.render("nextpage");
});

app.get("/signup1", function(req, res){
    res.render('signup1');
});

app.get("/signup2", function(req, res){
    res.render('signup2');
});

app.get("/signup3", function(req, res){
    res.render('signup3');
});

app.get('/content3', function(req, res){
    res.render('content3');
});

app.get("/nextpage2", function(req, res){
    res.render("nextpage2");
});

app.get("/tag", (req, res) => {
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Tag.find({
            name: regex
        }, function (err, foundTags) {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    tags: foundTags
                });
            }
        });

    }
});

app.listen(3000, function () {
    console.log("running");
});