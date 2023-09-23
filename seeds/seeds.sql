-- DEPARTMENT --

INSERT INTO department (department_name) 
VALUES  ("Engineering"),
        ("Sales"),
        ("Finance"),
        ("Legal"),
        ("Human Resources");

-- ROLE --

INSERT INTO role (title, salary, departmentID)

VALUES  ("Lead Engineer", 250000, 1),
        ("Engineer", 155000, 1),
        ("Sales Mgr.", 120000, 2),
        ("Online Sales Rep.", 98000, 2),
        ("Print Sales Rep.", 90000, 2),
        ("Comptroller", 99000, 3),
        ("Accountant", 150000, 3),
        ("Billing Coordinator", 100000, 3),
        ("Lawyer", 190000, 4),
        ("Operations Mgr.", 120000, 5),
        ("HR Coordinator", 90000, 5);

-- Employee --

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES  ("Eric", "Koston", 1, NULL),
        ("Rodrigo", "Texeira", 2, 1),
        ("Kareem", "Campbell", 3, 2),
        ("Henry", "Sanchez", 4, 3),
        ("Tony", "Trujillo", 2, 4),
        ("Julian", "Stranger", 3, 1);
        
       
