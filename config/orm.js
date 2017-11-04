var connection = require('./connection.js');

var orm = {
	selectAll: function(tableInput, callback){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},

	insertOne: function(tableInput, column, value, callback){
		var queryString = "INSERT INTO " + tableInput;
		queryString += ' (';
		queryString += column.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(value.length);
		queryString += ') ';

		connection.query(queryString, value, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},

	updateOne: function(tableInput, columnValue, condition, callback){
		var queryString = "UPDATE " + tableInput;
		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},
};

module.exports = orm;