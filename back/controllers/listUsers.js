const selectUsersQuery = require("../db/queries/selectUsersQuery");

const listUsers = async (req, res, next) => {
  try {
    const users = await selectUsersQuery(req.user?.id);

    res.send({
      code: 200,
      status: "ok",
      data: {
        users
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = listUsers;
