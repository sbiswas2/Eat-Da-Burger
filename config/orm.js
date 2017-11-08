var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

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

	insertOne: function(tableInput, column, callback){
		var name = column.toString();
		console.log(name);
		var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ( '" + name + "', false);"

		console.log(queryString);

		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},

	updateOne: function(tableInput, columnValue, condition, callback){
		var queryString = "UPDATE " + tableInput;
		queryString += ' SET devoured = true';
		// queryString += objToSql(columnValue); //objToSql(columnValue);
		queryString += ' WHERE ';
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(error, result){
			if (error) throw error;
			callback(result);
		});
	},

	deleteOne: function(tableInput, condition, callback) {
    var queryString = "DELETE FROM " + tableInput;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(error, result) {
      		if (error) throw error;
			callback(result);
    });
  }
};

module.exports = orm;