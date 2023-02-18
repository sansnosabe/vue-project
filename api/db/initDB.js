require("dotenv").config();

const getDB = require("./getDB");

const createTables = async () => {
  let connection;

  try {
    connection = await getDB();

    console.log("Borrando tabla...");

    await connection.query("DROP TABLE IF EXISTS users");

    console.log("Creando tabla...");

    await connection.query(`
			CREATE TABLE IF NOT EXISTS users(
				id INT UNSIGNED PRIMARY KEY	AUTO_INCREMENT,
				name VARCHAR(30) NOT NULL,
				age INT UNSIGNED,
				profession VARCHAR(20) NOT NULL,
				created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        modified_at DATETIME ON UPDATE CURRENT_TIMESTAMP
				);
		`);

    console.log("¡Tabla creada!");

    console.log("Creando usuarios...");

    await connection.query(`
      INSERT INTO users (name, age, profession) 
      VALUES 
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
		`);

    console.log("¡Usuarios creados!");
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) connection.release();

    process.exit();
  }
};

createTables();
