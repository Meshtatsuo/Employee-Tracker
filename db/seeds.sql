-- USE TO ADD SAMPLE DATA TO THE DATABASE FOR TESTING

INSERT INTO department (department_name)
VALUES ("IT"), ("Accounting"), ("Human resources"), ("Marketing");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Manager", 80000.00, 1), ("Engineer", 70000.00, 1), ("Intern", 45000.00, 1),
("Manager", 80000.00, 2), ("Engineer", 70000.00, 2), ("Intern", 45000.00, 2),
("Manager", 80000.00, 3), ("Associate", 70000.00, 3), ("Intern", 45000.00, 3),
("Manager", 80000.00, 4), ("Designer", 70000.00, 4), ("Intern", 45000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Smith", 1, NULL),
("Veronica", "Lawrence", 4, NULL),
("Felecia", "Long", 7, NULL),
("Edwin", "Reid", 10, NULL),
("Adrian", "Fletcher", 2, 1),
("Nina", "Lucas", 2, 1),
("Albert", "Burns", 2, 1),
("Elsie", "Phillips", 2, 1),
("Debra", "Green", 3, 1),
("Kevin", "Jordan", 3, 1),
("Gwendolyn", "Elliott", 3, 1),
("Tracy", "Peters", 5, 4),
("Joy", "Fletcher", 5, 4),
("Louise", "Stewart", 5, 4),
("Javier", "Martin", 6, 4),
("Bertha", "Fletcher", 6, 4),
("Frederick", "Tucker", 6, 4),
("Daryl", "Ortiz", 8, 7),
("Gordon", "Rivera", 8, 7),
("Sheila", "Dunn", 8, 7),
("Austin", "Baker", 9, 7),
("Joanne", "Shaw", 9, 7),
("Tyler", "Peck", 9, 7),
("Seth", "Steeves", 11, 10),
("Wanda", "Nguyen", 11, 10),
("Irene", "Fuller", 11, 10),
("Deann", "Herrera", 12, 10),
("Eli", "Freeman", 12, 10),
("Suzanne", "Newman", 12, 10)