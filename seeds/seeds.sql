-- DEPARTMENT --

INSERT INTO department (department_name) VALUES ("Engineering");
INSERT INTO department (department_name) VALUES ("Sales");
INSERT INTO department (department_name) VALUES ("Finance");
INSERT INTO department (department_name) VALUES ("Legal");
INSERT INTO department (department_name) VALUES ("Human Resources");

-- ROLE --

INSERT INTO role (title, salary, departmentID) VALUES ("Lead Engineer", 250000, 1);
INSERT INTO role (title, salary, departmentID) VALUES ("Engineer", 155000, 1);

INSERT INTO role (title, salary, departmentID) VALUES ("Sales Mgr.", 120000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Online Sales Rep.", 98000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Print Sales Rep.", 90000, 2);

INSERT INTO role (title, salary, departmentID) VALUES ("Comptroller", 99000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Accountant", 150000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Billing Coordinator", 100000, 3);

INSERT INTO role (title, salary, departmentID) VALUES ("Lawyer", 190000, 4);

INSERT INTO role (title, salary, departmentID) VALUES ("Operations Mgr.", 120000, 5);

INSERT INTO role (title, salary, departmentID) VALUES ("HR Coordinator", 90000, 5);

-- Employee --

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Eric", "Koston", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Rodrigo", "Texeira", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kareem", "Campbell", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Henry", "Sanchez", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tony", "Trujillo", 2, 4);
       
