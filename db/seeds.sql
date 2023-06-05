INSERT INTO department (department_name)
VALUES('Parks Department');
INSERT INTO department (department_name)
VALUES('Government of Pawnee');
INSERT INTO department (department_name)
VALUES('City Manager');
INSERT INTO department (department_name)
VALUES('Health Department');

INSERT INTO roles (title, salary, department_id)
VALUES('Director', 65000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES('Deputy Director', 55000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES('Permits Security', 50000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES('Administrator', 50000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES('Utilities', 52000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES('Assistant', 40000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES('City Manager', 95000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES('Assistant City Manager', 93000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES('Office Manager', 82000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES('Public Relations Director', 76000, 4);

INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Ron', 'Swanson', 'Director', 'Parks Department', 65000, null, null);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Leslie', 'Knope', 'Deputy Director', 'Parks Department', 55000, 'Ron', 'Swanson');
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Donna', 'Meagle', 'Permits Security', 'Parks Department', 50000, 'Ron', 'Swanson');
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Tom', 'Haverford', 'Administrator', 'Parks Department', 50000, 'Ron', 'Swanson');
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Andy', 'Dwyer', 'Utilities', 'Government of Pawnee', 52000, 'Ron', 'Swanson');
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('April', 'Ludgate', 'Assistant', 'Parks Department', 40000, 'Ron', 'Swanson');
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Chris', 'Traeger', 'City Manager', 'City Manager', 95000, null, null);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Ben', 'Wyatt', 'Assistant City Manager', 'City Manager', 93000, 'Chris', 'Treager');
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Garry', 'Gergich', 'Office Manager', 'Parks Department', 82000, 'Ron', 'Swanson');
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Ann', 'Perkins', 'Public Relations Director', 'Health Department', 76000, null, null);
