var orm = require('../config/orm.js');

var burger = {
	selectAll: function(callback){
		orm.selectAll("burgers", function(result){
			callback(result);
		});
	},

	insertOne: function(column, value, callback){
		orm.insertOne("burgers", column, value, function(result){
			callback(result);
		});
	},

	updateOne: function(columnValue, condition, callback){
		orm.updateOne("burgers", columnValue, condition, function(result){
			callback(result);
		});
	},
};

module.exports = burger;