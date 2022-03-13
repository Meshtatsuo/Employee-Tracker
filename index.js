const db = require("mysql2");
const inquirer = require("inquirer");

// DB config
const dbConfig = {
  host: "localhost",
  user: process.env.DB_USER,
  passsword: process.env.DB_PW,
  database: process.env.DB_NAME,
};

// Connect to database
const db = mysql
  .createConnection(
    dbConfig,
    console.log(` +++ Connected to ${process.env.DB_NAME}`)
  )
  .promise();
