const deleteUsersQuery = require("../db/queries/deleteUsersQuery");
const selectUserByIdQuery = require("../db/queries/selectUserByIdQuery");
const { deleteImg } = require("../helpers");

const deleteUser = async (req, res, next) => {
  try {
    const idUser = req.params.id;
    const user = await selectUserByIdQuery(idUser); 

    if (!user) {
      return res.status(404).send({
        code: 404,
        status: "error",
        message: "Usuario no encontrado",
      });
    }

    if (user.avatar) {
      await deleteImg(user.avatar);
    }

    await deleteUsersQuery(idUser);

    res.send({
      code: 200,
      status: "ok",
      message: "Usuario eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteUser;

