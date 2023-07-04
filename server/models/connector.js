// get the client
const mysql = require("mysql2/promise");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mytodo",
  password: "q1w2e3r4",
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
  ["Page", 45],
  function (err, results) {
    console.log(results);
  }
);

module.exports = connection;
