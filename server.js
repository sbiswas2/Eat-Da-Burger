var express = require("express");
// var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Import routes and give the server access to them.
var burgerController = require("./controllers/burgers_controller.js");
// Import the model (burger.js) to use its database functions.
var burger = require("./models/burger.js");

var PORT = process.env.PORT || 3306;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

// app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

app.use("/api/burgers", burgerController);

app.listen(PORT);
