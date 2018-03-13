// set up MySQL connection
require('dotenv').config();
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
}



// make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;