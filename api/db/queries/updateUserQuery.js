const getDB = require("../getDB");

const updateUserQuery = async (idUser, name, age, profession) => {
	let connection;

	try {
		connection = await getDB();

		if (name) {
			await connection.query(`UPDATE users SET name = ? WHERE id = ?`, [name, idUser]);
		}

		if (age) {
			await connection.query(`UPDATE users SET age = ? WHERE id = ?`, [age, idUser]);
		}

		if (profession) {
			await connection.query(`UPDATE users SET profession = ? WHERE id = ?`, [profession, idUser]);
		}
	} finally {
		if (connection) connection.release();
	}
};

module.exports = updateUserQuery;
