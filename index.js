// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./connectors/connection.js");

let arrEmployees = [];
let arrRoles = [];
let arrManagers = [];
let deptBelong = [];

const questions = [
  {
    type: "list",
    message: "what would you like to do?",
    name: "action",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
      "Exit",
    ],
  },
];

//Prompt Questions

function init() {
  inquirer.prompt(questions).then(function (data) {
    if (data.action === "View All Departments") {
      //view departments
      viewAllDepartments();
    }
    if (data.action === "View All Roles") {
      //view all roles
      viewAllRoles();
    }
    if (data.action === "View All Employees") {
      //view employees
      viewAllEmployees();
    }
    if (data.action === "Add Department") {
      //add a department
      createDepartment();
    }
    if (data.action === "Add Role") {
      //add role
      createRole();
    }

    if (data.action === "Add Employee") {
      //Add Employee
      addEmployee();
    }
    if (data.action === "Update Employee Role") {
      //Update Employee Role
      updateEmployeeRole();
    }
  });
}

function viewAllDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log("*** DEPARTMENT LIST ***");
    console.table(results);
    init();
  });
}
function viewAllRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log("*** ROLE LIST ***");
    console.table(results);
    init();
  });
}
function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log("*** EMPLOYEE LIST ***");
    console.table(results);
    init();
  });
}
function createDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the name of the department you want to add?",
        name: "department",
      },
    ])
    .then((data) => {
      db.query(
        "INSERT INTO department (department_name) values (?)",
        [data.department],
        (err, results) => {
          if (err) {
            console.log(err);
          }
          console.log("department has been added.");
          init();
        }
      );
    });
}
function createRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the name of the role you'd like to create?",
        name: "title",
      },
      {
        type: "input",
        message: "what is the salary for this role?",
        name: "salary",
      },
      {
        type: "input",
        message: " what is the department id?",
        name: "departmentID",
      },
    ])
    .then((data) => {
      db.query(
        "INSERT INTO role (title, salary, departmentID) values (?,?,?)",
        [data.title, data.salary, data.departmentID],
        (err, results) => {
          if (err) {
            console.log(err);
          }
          console.log("role has been added.");
          init();
        }
      );
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "what is the employee's name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: " what is the role?",
        name: "roleID",
      },
      {
        type: "input",
        message: " what is the manager id?",
        name: "managerID",
      },
    ])
    .then((data) => {
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)",
        [data.firstName, data.lastName, data.roleID, data.managerID],
        (err, results) => {
          if (err) {
            console.log(err);
          }
          console.log("employee has been added.");
          init();
        }
      );
    });
}

init();
