-- SHOW ALL DEPARTMENTS - Formatted Better Tiles
SELECT 
    id AS "Department ID",
    department_name AS "Department Name"
FROM department;


-- DISPLAY EMPLOYEE ROLES WITH DEPARTMENT NAME JOINED FROM DEPARTMENTS
SELECT
    employee_role.title AS "Job Title",
    employee_role.id AS "Role ID",
    d.department_name AS "Department",
    employee_role.salary AS "Salary"
FROM employee_role
JOIN department d
ON employee_role.department_id = d.id;


-- DISPLAY ALL EMPLOYEES WITH MANAGER, JOB TITLE, DEPARTMENT, AND SALARY SHOWN
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

-- UPDATE EMPLOYEE'S ROLE ID (0 val is placeholder)
UPDATE employees
SET role_id = 0
WHERE id = 0