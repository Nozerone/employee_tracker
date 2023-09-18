const express = require('express');


// Import and require mysql2
const mysql = require('mysql2');
const inquirer= require('inquirer');

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

//Query database
// db.query('SELECT * FROM employees', function (err, results) {
//   console.log(results);
// })

const questions = [
  {
    type: "list",
    message: "what would you like to do?",
    name: "Action",
    choices: [
      "View All Employees", 
      "View All Departments",
      "View All Roles",
      "View All Employees by Department",
      "View All Employees by Role",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
      "Exit"
      ]
  }

  // {
  //   type: "input",
  //   mesage:
  //     "what is the name of the department?",
  //   name: "",
  // },

  // {
  //   type: "input",
  //   message: "What is the name of the role?",
  //   name: "",
  // },

  // {
  //   type: "input",
  //   message: "What is the salary of the role?",
  //   name: "char_color",
  // },
  // {
  //   type: "input",
  //   message: "what department does the role belong to?",
  //   name: "",

  // },
  // {
  //   type: "input",
  //   message: "What is the employee's first name?",
  //   name: ""
  // },
  // {
  //   type: "input",
  //   message: "What is the employee's last name?",
  //   name: "",
  // },
  // {
  //   type: "input",
  //   mesage: "What is the employee's role?",
  //   name: "",
  // },
  // {
  //   type: "input",
  //   message: "Who is the employee's manager?",
  //   name: "",
  // },
  // {
  //   type: "list",
  //   message: "Which employee's role do you want to update?",
  //   name: "",
  //   choices: [],
  // }
];

//Prompt Questions

function init() {
  inquirer.prompt(questions).then(function (data) {
    if (data.action === "View All Employees") {
      //view employees
        viewAllEmployees();
        
    }
    if (data.action === "View All Departments") {
      //view departments
      viewAllDepartments();
    
    }
    if (data.action === "View All Roles") {
      //view departments
    
    } 
    if (data.action === "Add a department") {
      //view departments
    
    } 
    if (data.action === "Add Role") {
      //view departments
    
    } 
    
    if (data.action === "Add Employee") {
      //view departments
    
    } 
    if (data.action === "Update Employee Role") {
      //view departments
    
    } 
    
  });
}
function viewAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err){console.log(err);}
    console.table(results);
  })
}
function viewAllDepartments() {
  db.query('SELECT * FROM department', function (err, results) {
    if (err){console.log(err);}
    console.table(results);
  })
}
init();