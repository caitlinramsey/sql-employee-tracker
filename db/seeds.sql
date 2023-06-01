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
VALUES ('Ben', 'Wyatt', 7, 7);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Garry', 'Gergich', 8, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Ann', 'Perkins', 9, null);

INSERT INTO department (name)
VALUES('Parks Department');
INSERT INTO department (name)
VALUES('Government of Pawnee');
INSERT INTO department (name)
VALUES('City Manager');
INSERT INTO department (name)
VALUES('Health Department');

INSERT INTO role (title, salary, department_id)
VALUES('Director', 65000, 1);
INSERT INTO role (name)
VALUES('Deputy Director', 55000, 1);
INSERT INTO role (name)
VALUES('Permits Security', 50000, 1);
INSERT INTO role (name)
VALUES('Administrator', 50000, 1);
INSERT INTO role (name)
VALUES('Utilities', 52000, 2);
INSERT INTO role (name)
VALUES('Assistant', 40000, 1);
INSERT INTO role (name)
VALUES('City Manager', 95000, 3);
INSERT INTO role (name)
VALUES('Assistant City Manager', 93000, 3);
INSERT INTO role (name)
VALUES('Office Manager', 82000, 1);
INSERT INTO role (name)
VALUES('Public Relations Director', 76000, 4);