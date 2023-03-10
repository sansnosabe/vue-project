const getDB = require("../getDB");

const createUserQuery = async (name, age, profession) => {
	let connection;

	try {
		connection = await getDB();

		await connection.query(`INSERT INTO users (name, age, profession) VALUE(?, ?, ?)`, [name, age, profession]);
	} finally {
		if (connection) connection.release();
	}
};

module.exports = createUserQuery;
