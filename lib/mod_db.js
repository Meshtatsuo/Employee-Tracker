const inquirer = require('inquirer');
const db = require('./db_queries');

// WORKING
function addNewEmployee() {
    return inquirer
        .prompt([{
                type: "input",
                name: "first_name",
                message: "Employee's First Name: "
            },
            {
                type: "input",
                name: "last_name",
                message: "Employee's Last Name: "
            },
            {
                type: "number",
                name: "role_id",
                message: "Employee's Role ID: "
            },
            {
                type: "number",
                name: "manager_id",
                message: "Employee's Manager ID: "
            }
        ])
        .then((answers) => {
            const success = db.addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id)
            if (success) {
                console.table({
                    "++++++++++++++++++++++++++++++++++++++++++++++++++++": "++++++++++++++++++++++++++++++++++++++++++++++++++++"
                })
                console.table({
                    first_name: answers.first_name,
                    last_name: answers.last_name,
                    role_id: answers.role_id,
                    manager_id: answers.manager_id
                })

                console.log("Employee added.")
            }
        })
}
// WORKING
function addNewDepartment() {
    return inquirer
        .prompt([{
            type: "input",
            name: "departmentName",
            message: "Enter new department name: "
        }])
        .then((answers) => {
            console.log(answers);
            const success = db.addDepartment(answers.departmentName);
            if (success) {
                console.log("Employee added.")
            } else {
                console.log("Sorry, an error ocurred. Please try again.");
            }
        })
}
//  WORKING
function addNewRole() {
    return inquirer
        .prompt([{
                type: "input",
                name: "role_name",
                message: "Please enter the new title: "
            },
            {
                type: "number",
                name: "salary",
                message: "Please enter the salary (NNNNNN.PP Format)"
            },
            {
                type: "number",
                name: "department_id",
                message: "Please enter the department ID: "
            }
        ])
        .then((answers) => {
            const success = db.addRole(answers.role_name, answers.salary, answers.department_id);
            if (success) {
                console.log("New role added!");
            } else {
                console.log("An error has occurred.");
            }
        })
}
// WORKING
function updateEmployeeRole() {
    inquirer
        .prompt([{
                type: "number",
                name: "employee_id",
                message: "Please enter the employee's ID: "
            },
            {
                type: "number",
                name: "newRole",
                message: "Please enter their new role ID: "
            }
        ])
        .then((results) => {
            const success = db.updateEmployeeRole(results.employee_id, results.newRole);
            if (success) {
                console.log("Employee succesfully updated!");
                return;
            } else {
                console.log("Error updating employee");
            }
        })
}



module.exports = {
    addNewEmployee,
    addNewDepartment,
    updateEmployeeRole,
    addNewRole
}