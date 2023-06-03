// Dependencies list
const mysql = require('mysql');
const inquirer = require('inquirer');
const util = require('util');

// Creates connection to MySQL Workbench
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employees_db'
});

connection.query = util.promisify(connection.query);

// Begin the application once connection is established
connection.connect(function (err) {
    if (err) throw (err);
    initialQuestions();
})

// Cute welcome
console.table(
    "\n------------ WELCOME TO YOUR EMPLOYEE TRACKER ------------\n" 
)

// Ask questions to figure out what they want to do
const initialQuestions = async () => {
    try {
        let answer = await inquirer.prompt ({
           name: 'action',
           type: 'list',
           message: 'What would you like to do?',
           choices: [
            'View Departments',
            'View Employees',
            'View Roles',
            'Add Departments',
            'Add Employees',
            'Add Roles',
            'Update Employee Role',
            'Exit'
           ] 
        });
        switch (answer.action) {
            case 'View Departments':
                viewDepartments();
                break;

            case 'View Employees':
                viewEmployees();
                break;

            case 'View Roles':
                viewRoles();
                break;

            case 'Add Departments':
                addDepartments();
                break;

            case 'Add Employees':
                addEmployees();
                break;

            case 'Add Roles':
                addRoles();
                break;

            case 'Update Employee Role':
                updateRole();
                break;

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log (err);
        initialQuestions();
    };
}


// Viewing all departments
const viewDepartments = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray(department));
            console.table(departmentArray);
            initialQuestions();
        });
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

// Viewing all employees
const viewEmployees = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray(employee));
            console.table(employeeArray);
            initialQuestions();
        });
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

//Viewing all roles
const viewRoles = async () => {
    console.log('Role View');
    try {
        let query = 'SELECT * FROM role';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray(role));
            console.table(roleArray);
            initialQuestions();
        });
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

// Adding a department
const addDepartments = async () => {
    try {
        console.log('Department Add');

        let answer = await inquirer.prompt([
            {
                name: 'departmentName',
                type: 'input',
                message: 'What is the name of the new department?'
            }
        ]);

        let result = await connection.query('INSERT INTO department SET?', {
            department_name: answer.departmentName
        });

        console.log(`${answer.departmentName} added successfully to departments.\n`)
        initialQuestions();
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

// Adding an employee
const addEmployees = async () => {
    try {
        console.log('Employee Add');

        let roles = await connection.query('SELECT * FROM role');

        let managers = await connection.query('SELECT * FROM employee');

        let answer = await inquirer.prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'What is the first name of this employee?'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'What is the last name of this employee?'
            },
            {
                name: 'employeeRoleId',
                type: 'input',
                choices: roles.map((role) => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                }),
                message: "What is this employee's role ID?"
            },
            {
                name: 'employeeManagerId',
                type: 'list',
                choices: managers.map((manager) => {
                    return {
                        name: manager.first_name + " " + manager.last_name,
                        value: manager.id
                    }
                }),
                message: "What is this employee's manager's ID?"
            },
        ])

        let result = await connection.query('INSERT INTO department SET?', {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: (answer.employeeRoleId),
            manager_id: (answer.employeeManagerId)
        });

        console.log(`${answer.firstName} ${answer.lastName} added successfully to departments.\n`)
        initialQuestions();
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

// Adding a role
const addRoles = async () => {
    try {
        console.log('Role Add');

        let departments = await connection.query('SELECT * department')

        let answer = await inquirer.prompt ([
            {
                name: 'title',
                type: 'input',
                message: 'What is the name of the new role?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of the new role?'
            },
            {
                name: 'departmentId',
                type: 'list',
                choices: departments.map((departmentId) => {
                    return {
                        name: departmentId.department_name,
                        value: departmentId.id
                    }
                }),
                message: 'What is the department ID that the new role is associated with?'
            },
        ]);

        let chooseDepartment;
        for (i = 0; i < departments.length; i++) {
            if(departments[i].department_id === answer.choice) {
                chooseDepartment = departments[i];
            };
        }
        let result = await connection.query('INSERT INTO role SET?', {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentId
        })

        console.log(`${answer.title} role has been added successfully.\n`)
        initialQuestions();
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

// Updating an employee's role
const updateRole = async () => {
    try {
        console.log('Employee Update');

        let employees = await connection.query('SELECT * employee')

        let employeeSelect = await inquirer.prompt ([
            {
                name: 'employee',
                type: 'list',
                choices: employees.map((employeeName) => {
                    return {
                        name: employeeName.first_name + " " + employeeName.last_name,
                        value: employeeName.id
                    }
                }),
                message: 'Please choose an employee to update?'
            }
        ]);

        let roles = await connection.query('SELECT * FROM role');

        let roleSelect = await inquirer.prompt ([
            {
                name: 'role',
                type: 'list',
                choices: roles.map((roleName) => {
                    return {
                        name: roleName.title,
                        value: roleName.id
                    }
                }),
                message: 'Please select the role that you want to update the employee with.'
            }
        ]);

        let result = await connection.query('UPDATE employee SET ? WHERE ?', [{ role_id: roleSelect.role }, { id: employeeSelect.employee }]);

        console.log(`The role has been updated successfully.\n`);
        initialQuestions();
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}
