// mysql inclusion to utilize database queries
const mysql = require("mysql2");

// require and run config() method in dotenv
// to initialize .env variables
require("dotenv").config();

// DB config
const dbConfig = {
  host: "localhost",
  user: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
};

// Connect to database
const db = mysql.createConnection(
  dbConfig,
  console.log(` +++ Connected to ${dbConfig.host}`)
);

// Displays information on all
// employees, joining necessary
// info of foreign keys for easy
// readability
function displayEmployees() {

  return new Promise((resolve, reject) => {
    // DISPLAY ALL EMPLOYEES WITH MANAGER, JOB TITLE, DEPARTMENT, AND SALARY SHOWN
    const query = `
  SELECT
    e.id as "Employee ID",
    e.first_name as "First Name",
    e.last_name as "Last Name",
    CONCAT(m.first_name, ' ', m.last_name) AS Manager,
    r.title as "Job Title",
    r.salary as Salary,
    d.department_name as Department
FROM
    employees e
LEFT JOIN employees m ON
    m.id = e.manager_id
LEFT JOIN employee_role r ON
    e.role_id = r.id
LEFT JOIN department d ON
    r.department_id = d.id;
  `;

    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        console.table(result);
        resolve(true);
      }
    })
  })

}

// Queries database to join necessary
// table info and display the employee
// info of a given employee_id value
function displayEmployee(employeeID) {
  return new Promise((resolve, reject) => {
    // DISPLAY ALL EMPLOYEES WITH MANAGER, JOB TITLE, DEPARTMENT, AND SALARY SHOWN
    const query = `
  SELECT
    e.id as "Employee ID",
    e.first_name as "First Name",
    e.last_name as "Last Name",
    CONCAT(m.first_name, ' ', m.last_name) AS Manager,
    r.title as "Job Title",
    r.salary as Salary,
    d.department_name as Department
FROM
    employees e
LEFT JOIN employees m ON
    m.id = e.manager_id
LEFT JOIN employee_role r ON
    e.role_id = r.id
LEFT JOIN department d ON
    r.department_id = d.id
WHERE
    e.id = (?);
  `;
    params = [employeeID]

    db.query(query, params, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        console.table(result);
        resolve(true);
      }
    })
  })
}

// Queries database to join neccessary
// table info and display the employee
// information of ONLY employees with
// a given manager_id value
function displayEmployeesOfManager(managerID) {
  return new Promise((resolve, reject) => {
    // DISPLAY ALL EMPLOYEES WITH MANAGER, JOB TITLE, DEPARTMENT, AND SALARY SHOWN
    const query = `
  SELECT
    e.id as "Employee ID",
    e.first_name as "First Name",
    e.last_name as "Last Name",
    CONCAT(m.first_name, ' ', m.last_name) AS Manager,
    r.title as "Job Title",
    r.salary as Salary,
    d.department_name as Department
FROM
    employees e
LEFT JOIN employees m ON
    m.id = e.manager_id
LEFT JOIN employee_role r ON
    e.role_id = r.id
LEFT JOIN department d ON
    r.department_id = d.id
WHERE
    e.manager_id = (?);
  `;
    params = [managerID]

    db.query(query, params, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        console.table(result);
        resolve(true);
      }
    })
  })
}

// Queries database to join neccessary
// table info and display the employee
// information of ONLY employees with
// a given department_id
function displayEmployeesOfDepartment(departmentID) {
  return new Promise((resolve, reject) => {
    // DISPLAY ALL EMPLOYEES WITH MANAGER, JOB TITLE, DEPARTMENT, AND SALARY SHOWN
    const query = `
  SELECT
    e.id as "Employee ID",
    e.first_name as "First Name",
    e.last_name as "Last Name",
    CONCAT(m.first_name, ' ', m.last_name) AS Manager,
    r.title as "Job Title",
    r.salary as Salary,
    d.department_name as Department
FROM
    employees e
LEFT JOIN employees m ON
    m.id = e.manager_id
LEFT JOIN employee_role r ON
    e.role_id = r.id
LEFT JOIN department d ON
    r.department_id = d.id
WHERE
    r.department_id = ( ? );
  `;
    params = [departmentID]

    db.query(query, params, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        console.table(result);
        resolve(true);
      }
    })
  })
}

// Queries and displays all employee roles
// in the employee_role table, joining
// any necessary info from foreign keys
function displayRoles() {
  return new Promise((resolve, reject) => {
    // DISPLAY EMPLOYEE ROLES WITH DEPARTMENT NAME JOINED FROM DEPARTMENTS
    const query = `
  SELECT
  employee_role.title AS "Job Title",
  employee_role.id AS "Role ID",
  d.department_name AS "Department",
  employee_role.salary AS "Salary"
FROM employee_role
JOIN department d
ON employee_role.department_id = d.id;
  `;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        console.table(result);
        resolve(true);
      }
    })
  })

}

// Displays all departments in the
// department table
function displayDepartments() {
  return new Promise((resolve, reject) => {
    // SHOW ALL DEPARTMENTS - Formatted Better Tiles
    const query = `
SELECT 
    id AS "Department ID",
    department_name AS "Department Name"
FROM department;
  `;

    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        console.table(result);
        resolve(true);
      }
    })
  })
}

// Adds a new department to the
// department table
function addDepartment(deptName) {
  return new Promise((resolve, reject) => {
    // Add new department to department table
    const query = `
  INSERT INTO department
  (department_name)
  VALUES (?);
  `;

    const params = deptName;
    db.query(query, params, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })

}

// Adds a new role and respective properties
// to the employee_role table
function addRole(newRole, salary, deptID) {
  return new Promise((resolve, reject) => {
    const query = `
  INSERT INTO employee_role
  (title, salary, department_id)
  VALUES (?,?,?)
  `
    const params = [newRole, salary, deptID];

    db.query(query, params, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })

}

// Adds a new employee and respective properties
// to the employees table
function addEmployee(firstName, lastName, roleID, managerID) {
  return new Promise((resolve, reject) => {
    // Add new employee
    const query = `
  INSERT INTO employees 
  (first_name, last_name, role_id, manager_id) 
  VALUES (?,?,?,?);
  `
    const params = [firstName, lastName, roleID, managerID];
    db.query(query, params, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        console.log(`${firstName} ${lastName} has been added...`);
        resolve(true);
      }
    })
  })

}

// Updates the role of a given employee (by employee_id)
// to a new role provided by the user
function updateEmployeeRole(employeeID, newRole) {
  return new Promise((resolve, reject) => {
    const query = `
  UPDATE employees
  SET role_id = ${newRole}
  WHERE id = ${employeeID}
  `


    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })

}

// Updates the manager of a given employee (by employee_id)
// to a new manager provided by the user.
function updateEmployeeManager(employeeID, newManager) {
  return new Promise((resolve, reject) => {
    const query = `
    UPDATE employees
    SET manager_id = ${newManager}
    WHERE id = ${employeeID};
    `

    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })
}

module.exports = {
  displayEmployees,
  displayEmployee,
  displayEmployeesOfManager,
  displayEmployeesOfDepartment,
  displayDepartments,
  displayRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager
};