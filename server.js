// Dependencies list
const mysql = require('mysql2');
const inquirer = require('inquirer');
const util = require('util');

// Creates connection to MySQL Workbench
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'employees_db'
});

connection.query = util.promisify(connection.query);

// Begin the application once connection is established
connection.connect(function (err) {
    if (err) throw err;
    begin();
})

// Cute welcome message
function title() {
    const topLine = ".================================================.\n";
    const bottomLine = "\.================================================.\n";
    const spaceBetween = "|                                                |\n";
    const bodyText = "|  WELCOME TO THE EMPLOYEE MANAGER APPLICATION   |\n";
    const title = topLine + spaceBetween + spaceBetween + bodyText + spaceBetween + spaceBetween + bottomLine;
    console.log('\n\n' + title + '\n')
  }

function begin() {
    title();
    initialQuestions();
}

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
            'Update Employee roles',
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

            case 'Update Employee roles':
                updateRoles();
                break;

            case 'Exit':
                connection.end();
                console.log('Goodbye!');
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
            res.forEach(department => departmentArray.push(department));
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
        let query = 'SELECT * FROM employees';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeesArray = [];
            res.forEach(employees => employeesArray.push(employees));
            console.table(employeesArray);
            initialQuestions();
        });
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

//Viewing all roles
const viewRoles = async () => {
    console.log('Roles View');
    try {
        let query = 'SELECT * FROM roles';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let rolesArray = [];
            res.forEach(roles => rolesArray.push(roles));
            console.table(rolesArray);
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

        let roles = await connection.query('SELECT * FROM roles');

        let managers = await connection.query('SELECT * FROM employees');
        // let man1 =[ ...managers.map((manager) => {
        //     return {
        //         name: manager.first_name + " " + manager.last_name,
        //         value: manager.id
        //     }
        // }),
        // {
        //     name: "None",
        //     value: null
        // } ]
        // console.log(man1)


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
                name: 'employeeRolesId',
                type: 'list',
                choices: roles.map((roles) => {
                    return {
                        name: roles.title,
                        value: roles.id
                    }
                }),
                message: "What is this employee's role?"
            },
            {
                name: 'employeeManagerId',
                type: 'list',
                choices: [ ...managers.map((manager) => {
                    return {
                        name: manager.first_name + " " + manager.last_name,
                        value: manager.id
                    }
                }),
                {
                    name: "None",
                    value: null
                } ],
                message: "Who is this employee's manager?"
            },
        ])

        let result = await connection.query('INSERT INTO employees SET?', {
            first_name: answer.firstName,
            last_name: answer.lastName,
            roles_id: (answer.employeeRolesId),
            manager_id: (answer.employeeManagerId)
        });

        console.log(`${answer.firstName} ${answer.lastName} added successfully to employees.\n`)
        initialQuestions();
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

// Adding a roles
const addRoles = async () => {
    try {
        console.log('Roles Add');

        let departments = await connection.query('SELECT * FROM department')

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
        let result = await connection.query('INSERT INTO roles SET?', {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentId
        })

        console.log(`${answer.title} roles has been added successfully.\n`)
        initialQuestions();
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}

// Updating an employee's roles
const updateRoles = async () => {
    try {
        console.log('Employee Update');

        let employees = await connection.query('SELECT * FROM employees')

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

        let roles = await connection.query('SELECT * FROM roles');

        let rolesSelect = await inquirer.prompt ([
            {
                name: 'roles',
                type: 'list',
                choices: roles.map((rolesName) => {
                    return {
                        name: rolesName.title,
                        value: rolesName.id
                    }
                }),
                message: 'Please select the roles that you want to update the employee with.'
            }
        ]);

        let result = await connection.query('UPDATE employees SET ? WHERE ?', [{ roles_id: rolesSelect.roles }, { id: employeeSelect.employees }]);

        console.log(`The roles has been updated successfully.\n`);
        initialQuestions();
    } catch (err) {
        console.log(err);
        initialQuestions();
    };
}
