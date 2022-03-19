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
                "Update employee role",
                "Quit"
            ]
        }])
        .then((result) => {
            switch (result.selection) {
                case "View all departments.":
                    displayDepartments();
                    break;
                case "View all roles.":
                    displayRoles();
                    break;
                case "View all employees":
                    displayEmployees();
                    break;
                case "Add new department":
                    addNewDepartment();
                    break;
                case "Add new role":
                    addNewRole();
                    break;
                case "Add new employee":
                    addNewEmployee();
                    break;
                case "Update employee role":
                    updateEmployeeRole();
                    break;
                case "Quit":
                    quit();
                    break;
            }
        })
}

async function displayEmployees() {
    const success = await query.displayEmployees();
    if (success) {
        console.log("Viewing Employees");
        beginAppLoop();
    } else {
        console.log("An unexpected error has occurred. Please try again");
        beginAppLoop();
    }
}

async function displayRoles() {
    const success = await query.displayRoles();
    if (success) {
        console.log("Viewing Roles...");
        beginAppLoop();
    } else {
        console.log("An unexpected error has occurred. Please try again");
        beginAppLoop();
    }
}

async function displayDepartments() {
    const success = await query.displayDepartments();
    if (success) {
        console.log("Viewing Departments...");
        beginAppLoop();
    } else {
        console.log("An unexpected error has occurred. Please try again");
        beginAppLoop();
    }
}

async function addNewRole() {
    const result = await db.addNewRole();

    if (result) {
        const success = await query.addRole(result.role_name, result.salary, result.department_id);

        if (success) {
            console.log("Successfully added! Now viewing all roles...");

            displayRoles();
        } else {
            console.log("There was an error querying the database. Please try again later");
            beginAppLoop();
        }
    } else {
        console.log("You failed to provide proper arguments. Please try again!");
        beginAppLoop();
    }
}

async function addNewDepartment() {
    const result = await db.addNewDepartment();

    if (result) {
        const success = await query.addDepartment(result.departmentName);

        if (success) {
            console.log("Successfully added! Now viewing all departments... ");
            displayDepartments();
        } else {
            console.log("There was an error querying the database. ")
            beginAppLoop();
        }
    }
}

async function addNewEmployee() {
    const result = await db.addNewEmployee();

    if (result) {
        const success = await query.addEmployee(result.first_name, result.last_name, result.role_id, result.manager_id);

        if (success) {
            console.log("Successfully added! now viewing employees... ");
            displayEmployees();
        } else {
            console.log("There was an error querying the database. ")
            beginAppLoop();
        }

    }
}

async function updateEmployeeRole() {
    const result = await db.updateEmployeeRole();

    if (result) {
        const success = await query.updateEmployeeRole(result.employee_id, result.newRole);

        if (success) {
            console.log("Role updated! Showing all employees... ");
            displayEmployees();
        } else {
            console.log("There was a problem querying the database. Please try again later");
            beginAppLoop();
        }
    }

}

// Quit program
function quit() {
    console.log("-----------------------------------------");
    console.log("Thank you for using the employee tracker!");
    console.log("-----------------------------------------");
    process.exit();
}

module.exports = {
    beginAppLoop,
    quit
}