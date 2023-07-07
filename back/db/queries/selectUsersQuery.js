const getDB = require("../getDB");
const { generateError } = require("../../helpers");

const selectUsersQuery = async () => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(`SELECT id, name, age, profession, avatar FROM users`);

    if (users.length < 0) {
      generateError("Usuarios no encontrados", 404);
    }

    return users;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectUsersQuery;
