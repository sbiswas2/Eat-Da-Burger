var express = require('express');
var burger = require("../models/burger.js");
var router = express.Router();

// index redirect
router.get('/', function(req, res){
	res.redirect('/index');
});
// index page
router.get('/index', function(req, res){
	burger.selectAll(function(data){
		res.render('index', {burgers: data});
	});
});
// create burger
router.post('/burgers/insertOne', function(req, res){
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function(){
		res.redirect('/index');
	});
});
// devour burger
router.put('/burgers/updateOne/:id', function(req, res){
	burger.updateOne({devoured: req.body.devoured}, 'id = ' + req.params.id, function(){
		res.redirect('/index');
	});
});

module.exports = router;