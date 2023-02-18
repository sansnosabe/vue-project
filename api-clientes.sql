CREATE DATABASE IF NOT EXISTS clients;

USE clients;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
id INT UNSIGNED PRIMARY KEY	AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
age INT UNSIGNED,
profession VARCHAR(20) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
modified_at DATETIME ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users (name, age, profession) VALUES 
('Juan', 27, 'Ingeniero'), 
('María', 31, 'Médico'), 
('Pedro', 45, 'Abogado'), 
('Ana', 22, 'Estudiante'), 
('Luis', 50, 'Empresario'), 
('Lucía', 38, 'Diseñadora'), 
('Fernando', 29, 'Programador'), 
('Carla', 33, 'Periodista'), 
('Javier', 42, 'Arquitecto'), 
('Marta', 25, 'Psicóloga');

SELECT * FROM users;