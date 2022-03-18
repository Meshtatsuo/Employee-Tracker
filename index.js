const inquirer = require("inquirer");
const query = require('./lib/db_queries');
const db = require('./lib/mod_db');

query.displayRoles();