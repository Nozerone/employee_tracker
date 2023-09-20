// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./lib/DB.js");

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

  {
    type: "input",
    mesage: "what is the name of the department?",
    name: "addDpt",
    when: (data) => data["action"] === "Add Department",
  },

  {
    type: "input",
    message: "What is the name of the role?",
    name: "role",
    when: (data) => data["action"] === "Add Role",
  },

  {
    type: "input",
    message: "What is the salary of the role?",
    name: "salary",
    when: (data) => data["action"] === "Add Role",
  },

  {
    type: "input",
    message: "what department does the role belong to?",
    name: "belongto",
    when: (data) => data["action"] === "Add Role",
  },

  {
    type: "input",
    message: "What is the employee's first name?",
    name: "firstName",
    when: (data) => data["action"] === "Add Employee",
  },

  {
    type: "input",
    message: "What is the employee's last name?",
    name: "lastName",
    when: (data) => data["action"] === "Add Employee",
  },

  {
    type: "list",
    mesage: "What is the employee's role?",
    name: "currentRole",
    choices: arrRoles,
    when: (data) => data["action"] === "Add Employee",
  },

  {
    type: "list",
    message: "Who is the employee's manager?",
    name: "currentManager",
    choices: arrManagers,
    when: (data) => data["action"] === "Add Employee",
  },

  {
    type: "list",
    message: "Which employee's role do you want to update?",
    name: "update",
    choices: arrEmployees,
    when: (data) => data["action"] === "Update Employee Role",
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
    if (data.action === "Add a department") {
      //add a department
      addDepartment();
    }
    if (data.action === "Add Role") {
      //add role
      addRole();
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

init();
