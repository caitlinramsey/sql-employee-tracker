// Dependencies list
const msql = require('mysql');
const inquirer = require('inquirer');
const util = require('util');
const tableHeader = require('table.header'); // Nice header for the application

// Creates connection to MySQL Workbench
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employees_db'
});

connection.query = util.promisify(connection.query);

// Begin the application once connection is established