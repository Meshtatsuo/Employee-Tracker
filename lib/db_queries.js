const mysql = require("mysql2");
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
  console.log(` +++ Connected to ${process.env.DB_NAME}`)
);

function displayEmployees() {
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
}

function displayRoles() {
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
}

function displayDepartments() {
  console.log("Display'em");
  // SHOW ALL DEPARTMENTS - Formatted Better Tiles
  const query = `
SELECT 
    id AS "Department ID",
    department_name AS "Department Name"
FROM department;
  `;

  db.query(query, (err, body) => {
    if (err) {
      console.log(err);
    } else {
      console.table(body);
    }
  });
}

function addDepartment(deptName) {
  // Add new department to department table
  const query = `INSERT INTO department
  ${deptName}  
  `;
}

function addRole(newRole, salary, deptID) {
  // Add new role to employee_role table
}

function addEmployee(firstName, lastName, roleID, managerID) {
  // Add new employee
}

function updateEmployeeRole(employeeID, newRole) {
  // Update new role for employee
}

module.exports = {
  displayEmployees,
  displayDepartments,
  displayRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
