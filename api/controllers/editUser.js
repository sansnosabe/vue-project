const updateUserQuery = require("../db/queries/updateUserQuery");

const editUser = async (req, res, next) => {
  try {
    const { id, name, age, profession } = req.body;

    await updateUserQuery(id, name, age, profession);

    res.send({
      code: 200,
      status: "ok",
      message: "Usuario actualizado",
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = editUser;
