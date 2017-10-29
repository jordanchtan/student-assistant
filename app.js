var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var modules = [
        {name: "Maths", score: "A"},
        {name: "Logic", score: "B"},
        {name: "Programming", score: "C"}
        ];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/overview", function(req, res) {
    
    res.render("overview", {modules: modules});
});

app.post("/overview", function(req, res) {
    var name = req.body.name;
    var score = req.body.score;
    var newModule = {name:name, score:score};
    modules.push(newModule);
    res.redirect("/overview");
});

app.get("/overview/new", function(req, res) {
    res.render("new");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started.");
});



