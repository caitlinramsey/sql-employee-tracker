INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Ron', 'Swanson', 1, null);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Leslie', 'Knope', 2, 1);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Donna', 'Meagle', 3, 1);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Tom', 'Haverford', 4, 1);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Andy', 'Dwyer', 5, 1);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('April', 'Ludgate', 6, 1);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Chris', 'Traeger', 7, null);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Ben', 'Wyatt', 8, 7);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Garry', 'Gergich', 9, 1);
INSERT INTO employees (first_name, last_name, roles_title, department_name, roles_salary, manager_first_name, manager_last_name)
VALUES ('Ann', 'Perkins', 10, null);

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