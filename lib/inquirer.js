// manages the entire user interaction
// will send user to mod_db prompts when needed,
// and then uses info from those prompts to query the database.

// All functions involving calls to methods from db_queries and
// mod_db are async functions, which allows those library's methods
// to execute fully before continuing with the interaction loop

// include inquirer library
const inquirer = require('inquirer');

// include local db_queries library and mod_db library
// for prompting user for info and querying database
const query = require('./db_queries');
const db = require("./mod_db");

// Starting and return point of all interactions outside
// quitting the application.
// Provides list of options for user to select what they
// wish to do
function main() {
    return inquirer
        .prompt([{
            type: "list",
            name: "selection",
            message: "What would you like to do?",
            pageSize: "15",
            choices: [
                new inquirer.Separator(),
                new inquirer.Separator("   VIEWING   "),
                new inquirer.Separator(),
                "View all departments.",
                "View all roles.",
                "View all employees",
                "View all employees of manager",
                "View all employees of department",
                "View employee by ID",
                new inquirer.Separator(),
                new inquirer.Separator("   ADDING   "),
                new inquirer.Separator(),
                "Add new department",
                "Add new role",
                "Add new employee",
                new inquirer.Separator(),
                new inquirer.Separator("   UPDATING   "),
                new inquirer.Separator(),
                "Update employee role",
                "Update employee manager",
                new inquirer.Separator(" "),
                "   QUIT   ",
                new inquirer.Separator(" ")

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
                case "View all employees of manager":
                    displayEmployeesOfManager();
                    break;
                case "View all employees of department":
                    displayEmployeesOfDepartment();
                    break;
                case "View employee by ID":
                    displayEmployee();
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
                case "Update employee manager":
                    updateEmployeeManager();
                    break;
                case "   QUIT   ":
                    quit();
                    break;
            }
        })
}


// Calls db_queries to display the full employee's table
// Once resolved, prompts user for next interaction by
// calling main()
async function displayEmployees() {
    const success = await query.displayEmployees();
    if (success) {
        console.log("Viewing Employees");
        main();
    } else {
        console.log("An unexpected error has occurred. Please try again");
        main();
    }
}

// Calls mod_db to prompt user for employee ID. Then
// calls db_queries to display that employee's info
// Once resolved, prompts user for next interaction by
// calling main()
async function displayEmployee() {
    const result = await db.displayEmployee();

    if (result) {
        const success = await query.displayEmployee(result.employee_id);

        if (success) {
            console.log("Displaying Employee... ");
            main();
        } else {
            console.log("An unexpected error occurred");
            main();
        }
    } else {
        console.log("You did not provide valid input. Please try again");
        main();
    }

}

// Calls mod_db to prompt user for manager ID they wish to
// view the employees of. Then
// calls db_queries to display that employee's info
// Once resolved, prompts user for next interaction by
// calling main()
async function displayEmployeesOfManager() {
    const result = await db.displayEmployeesOfManager();

    if (result) {
        const success = await query.displayEmployeesOfManager(result.manager_id);

        if (success) {
            console.log("Displaying employees... ");
            main();
        } else {
            console.log("An unexpected error has occurred.");
            main();
        }
    }
}

// Calls mod_db to prompt user for department ID. Then
// calls db_queries to display the employees of that department
// Once resolved, prompts user for next interaction by
// calling main()
async function displayEmployeesOfDepartment() {
    const result = await db.displayEmployeesOfDepartment();

    if (result) {
        const success = await query.displayEmployeesOfDepartment(result.department_id);

        if (success) {
            console.log("Displaying employees... ");
            main();
        } else {
            console.log("An unexpected error has occurred.");
            main();
        }
    }
}

// Calls db_queries to display all roles in the
// employee_role table
// Once resolved, prompts user for next interaction by
// calling main()
async function displayRoles() {
    const success = await query.displayRoles();
    if (success) {
        console.log("Viewing Roles...");
        main();
    } else {
        console.log("An unexpected error has occurred. Please try again");
        main();
    }
}

// Calls db_queries to display all departments in the
// department table
// Once resolved, prompts user for next interaction by
// calling main()
async function displayDepartments() {
    const success = await query.displayDepartments();
    if (success) {
        console.log("Viewing Departments...");
        main();
    } else {
        console.log("An unexpected error has occurred. Please try again");
        main();
    }
}

// Calls db_queries to display all employees in the
// employees table
// Once resolved, prompts user for next interaction by
// calling main()
async function addNewRole() {
    const result = await db.addNewRole();

    if (result) {
        const success = await query.addRole(result.role_name, result.salary, result.department_id);

        if (success) {
            console.log("Successfully added! Now viewing all roles...");

            displayRoles();
        } else {
            console.log("There was an error querying the database. Please try again later");
            main();
        }
    } else {
        console.log("You failed to provide proper arguments. Please try again!");
        main();
    }
}

// Calls mod_db to prompt user for new department info, then
// calls db_queries to add new department to department table
// Once resolved, displays all departments visual confirmation
// and then prompts user for next interaction by
// calling main()
async function addNewDepartment() {
    const result = await db.addNewDepartment();

    if (result) {
        const success = await query.addDepartment(result.departmentName);

        if (success) {
            console.log("Successfully added! Now viewing all departments... ");
            displayDepartments();
        } else {
            console.log("There was an error querying the database. ")
            main();
        }
    }
}

// Calls mod_db to prompt for new employee info, then
// calls db_queries to add new employee to employees table.
// Once resolved, call db_queries again to display the newly
// created employee's info, and then prompts user for next
// interaction by calling main()
async function addNewEmployee() {
    const result = await db.addNewEmployee();

    if (result) {
        const success = await query.addEmployee(result.first_name, result.last_name, result.role_id, result.manager_id);

        if (success) {
            console.log("Successfully added! now viewing employees... ");
            displayEmployees();
        } else {
            console.log("There was an error querying the database. ")
            main();
        }

    }
}

// Calls mod_db to prompt user for new employee's role and that
// employee's ID. Then calls db_queries to update that info
// in the employees table.
// Once resolved, display that employee for visual confirmation
// and prompt for next interaction by calling main()
async function updateEmployeeRole() {
    const result = await db.updateEmployeeRole();

    if (result) {
        const success = await query.updateEmployeeRole(result.employee_id, result.newRole);

        if (success) {
            console.log("Role updated!");
            const success = await query.displayEmployee(result.employee_id);
            if (success) {
                main();
            } else {
                console.log("There was an error displaying the employee.");
                main();
            }
        } else {
            console.log("There was a problem querying the database. Please try again later");
            main();
        }
    }

}

// Calls mod_db to prompt user for employee ID and their
// new manager's ID. Then calls db_queries to update that
// info in the employees table.
// Once resolved, display that employee for visual confirmation
// and prompt for next interaction by calling main()
async function updateEmployeeManager() {
    const result = await db.updateEmployeeManager();

    if (result) {
        const success = await query.updateEmployeeManager(result.employee_id, result.manager_id);

        if (success) {
            console.log("Manager updated!");
            const success = await query.displayEmployee(result.employee_id);
            if (success) {
                main();
            } else {
                console.log("There was an error displaying the employee.");
                main();
            }
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
    main,
    quit
}