const mysql = require("mysql2/promise");
const env = require("../config/env");
let connection;

const connect = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: env.dbHOST,
      user: "root",
      password: env.dbPassword,
      database: env.dbNAME,
    });
  }
  return connection;
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, getConnection };
