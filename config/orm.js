var connection = require('./connection.js');

// function printQuestionMarks(num) {
//   var arr = [];
//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//   return arr.toString();
// };

// function objToSql(ob) {
//   var arr = [];
//   for (var key in ob) {
//     var value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }
//   return arr.toString();
// };

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
		queryString += objToSql(columnValue); //objToSql(columnValue);
		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},
};

module.exports = orm;