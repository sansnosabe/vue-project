const updateUserQuery = require("../db/queries/updateUserQuery");

const editUser = async (req, res, next) => {
  try {
    const { name, age, profession } = req.body;

    await updateUserQuery(name, age, profession, req.user.id);

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
