const inquirer = require('inquirer');
const query = require('./db_queries');
const db = require("./mod_db");

function beginAppLoop() {
    return inquirer
        .prompt([{
            type: "list",
            name: "selection",
            message: "What would you like to do?",
            choices: [
                "View all departments.",
                "View all roles.",
                "View all employees",
                "Add new department",
                "Add new role",
                "Add new employee",
                "Update employee role"
            ]
        }])
        .then((result) => {
            switch (result.selection) {
                case "View all departments.":
                    query.displayDepartments();
                    break;
                case "View all roles.":
                    query.displayRoles();
                    break;
                case "View all employees":
                    query.displayEmployees();
                    break;
                case "Add new department":
                    db.addNewDepartment();
                    break;
                case "Add new role":
                    db.addNewRole();
                    break;
                case "Add new employee":
                    db.addNewEmployee();
                    break;
                case "Update employee role":
                    db.updateEmployeeRole();
                    break;
            }
        })
}

function quit() {
    console.log("-----------------------------------------");
    console.log("Thank you for using the employee tracker!");
    console.log("-----------------------------------------");
}

module.exports = {
    beginAppLoop,
    quit
}