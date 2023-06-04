INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Ron', 'Swanson', 1, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Leslie', 'Knope', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Donna', 'Meagle', 3, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Tom', 'Haverford', 4, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Andy', 'Dwyer', 5, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('April', 'Ludgate', 6, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Chris', 'Traeger', 7, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Ben', 'Wyatt', 8, 7);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Garry', 'Gergich', 9, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Ann', 'Perkins', 10, null);

INSERT INTO department (department_name)
VALUES('Parks Department');
INSERT INTO department (department_name)
VALUES('Government of Pawnee');
INSERT INTO department (department_name)
VALUES('City Manager');
INSERT INTO department (department_name)
VALUES('Health Department');

INSERT INTO role (title, salary, department_id)
VALUES('Director', 65000, 1);
INSERT INTO role (title, salary, department_id)
VALUES('Deputy Director', 55000, 1);
INSERT INTO role (title, salary, department_id)
VALUES('Permits Security', 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUES('Administrator', 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUES('Utilities', 52000, 2);
INSERT INTO role (title, salary, department_id)
VALUES('Assistant', 40000, 1);
INSERT INTO role (title, salary, department_id)
VALUES('City Manager', 95000, 3);
INSERT INTO role (title, salary, department_id)
VALUES('Assistant City Manager', 93000, 3);
INSERT INTO role (title, salary, department_id)
VALUES('Office Manager', 82000, 1);
INSERT INTO role (title, salary, department_id)
VALUES('Public Relations Director', 76000, 4);