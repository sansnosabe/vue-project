CREATE DATABASE IF NOT EXISTS clients;

USE clients;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
id INT UNSIGNED PRIMARY KEY	AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
age INT UNSIGNED,
profession VARCHAR(20) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM users;

INSERT INTO users (name, age, profession) VALUES ('Juan', 27, 'Ingeniero');
INSERT INTO users (name, age, profession) VALUES ('María', 31, 'Médico');
INSERT INTO users (name, age, profession) VALUES ('Pedro', 45, 'Abogado');
INSERT INTO users (name, age, profession) VALUES ('Ana', 22, 'Estudiante');
INSERT INTO users (name, age, profession) VALUES ('Luis', 50, 'Empresario');
INSERT INTO users (name, age, profession) VALUES ('Lucía', 38, 'Diseñadora');
INSERT INTO users (name, age, profession) VALUES ('Fernando', 29, 'Programador');
INSERT INTO users (name, age, profession) VALUES ('Carla', 33, 'Periodista');
INSERT INTO users (name, age, profession) VALUES ('Javier', 42, 'Arquitecto');
INSERT INTO users (name, age, profession) VALUES ('Marta', 25, 'Psicóloga');

