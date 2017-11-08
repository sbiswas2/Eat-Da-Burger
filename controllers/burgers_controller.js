var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// // index redirect
// router.get('/', function(req, res){
// 	res.redirect('/index');
// });
// // index page
// router.get('/index', function(req, res){
// 	burger.selectAll(function(data){
// 		res.render('index', {burgers: data});
// 	});
// });
// // create burger
router.post("/", function(req, res) {
  burger.insertOne([
    req.body.name//, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
// router.post('/burgers/insertOne', function(req, res){
// 	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function(){
// 		res.redirect('/index');
// 	});
// });
// // devour burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// router.put('/burgers/updateOne/:id', function(req, res){
// 	var condition = 'id = ' + req.params.id;
// 	burger.updateOne({devoured: req.body.devoured}, condition, function(){
// 		res.redirect('/index');
// 	});
// });

// // delete burger?
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
