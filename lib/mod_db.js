const inquirer = require('inquirer');
const db = require('./db_queries');

// WORKING
function addNewEmployee() {
    return new Promise((resolve, reject) => {
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
                resolve(answers);
            })
    })

}
// WORKING
function addNewDepartment() {
    return new Promise((resolve, reject) => {
        return inquirer
            .prompt([{
                type: "input",
                name: "departmentName",
                message: "Enter new department name: "
            }])
            .then((answers) => {
                console.log(answers);
                resolve(answers);
            })
    })

}
//  WORKING
function addNewRole() {
    return new Promise((resolve, reject) => {
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
                resolve(answers);
            })
    })

}
// WORKING
function updateEmployeeRole() {
    return new Promise((resolve, reject) => {
        return inquirer
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
                resolve(results);
            })
    })

}



module.exports = {
    addNewEmployee,
    addNewDepartment,
    updateEmployeeRole,
    addNewRole
}