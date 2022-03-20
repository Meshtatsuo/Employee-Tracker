// include inquirer so we can prompt user using its toolset
const inquirer = require('inquirer');

// Prompts user for employee ID, then resolves promise
function displayEmployee() {
    return new Promise((resolve, reject) => {
        return inquirer
            .prompt([{
                type: "number",
                name: "employee_id",
                message: "Please enter the employee ID: "
            }])
            .then((answers) => {
                resolve(answers);
            })
    })
}

// prompts user for manager ID they wish to view employees of
// then resolves promise
function displayEmployeesOfManager() {
    return new Promise((resolve, reject) => {
        return inquirer
            .prompt([{
                type: "number",
                name: "manager_id",
                message: "Please enter the manager's ID: "
            }])
            .then((answers) => {
                resolve(answers);
            })
    })
}

// prompts user for department ID they wish to view employees of
// then resolves promise
function displayEmployeesOfDepartment() {
    return new Promise((resolve, reject) => {
        return inquirer
            .prompt([{
                type: "number",
                name: "department_id",
                message: "Please enter the department ID: "
            }])
            .then((answers) => {
                resolve(answers);
            })
    })
}

// prompts user for employee info, then resolves promise
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

// prompts user for department name and then resolves promise
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

//  prompts user for role information, then resolves promise
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

// prompts user for employee ID and new role ID, then resolves promise
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

// prompts user for the employee ID and their new manager's ID, then resolves promise
function updateEmployeeManager() {
    return new Promise((resolve, reject) => {
        return inquirer
            .prompt([{
                    type: "number",
                    name: "employee_id",
                    message: "Please enter the employee's ID: "
                },
                {
                    type: "number",
                    name: "manager_id",
                    message: "Please enter their new manager's ID: "
                }
            ])
            .then((results) => {
                resolve(results);
            })
    })
}



module.exports = {
    addNewEmployee,
    displayEmployee,
    displayEmployeesOfManager,
    displayEmployeesOfDepartment,
    addNewDepartment,
    updateEmployeeRole,
    updateEmployeeManager,
    addNewRole
}