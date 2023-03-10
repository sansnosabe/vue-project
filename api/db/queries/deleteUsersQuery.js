const getDB = require("../getDB");

const deleteUsersQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();
    await connection.query(`DELETE FROM users WHERE id = ?`, [idUser]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteUsersQuery;
