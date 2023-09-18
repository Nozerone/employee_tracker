DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;
USE company_db;

-- Department Trable --
CREATE TABLE department(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
);

-- Role Table --
CREATE TABLE role(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  departmentID INT NOT NULL,
  FOREIGN KEY (departmentID) REFERENCES department(id)
);
-- Employee Table --
CREATE TABLE employee(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT 
);
