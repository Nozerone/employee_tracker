
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "company_db",
  },
  console.log(`++++++++++ Connected to the company_db database.+++++++++++`)
);


const questions = [
  {
    type: "list",
    message: "what would you like to do?",
    name: "action",
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
      "Exit",
    ],
  },

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
      //view all roles
      viewAllRoles();
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

function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log("*** EMPLOYEE LIST ***")
    console.table(results);
    init();
  });
}

function viewAllDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log("*** DEPARTMENT LIST ***")
    console.table(results);
    init();
  });
}
function viewAllRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log("*** ROLE LIST ***")
    console.table(results);
    init();
  });
}

init();
