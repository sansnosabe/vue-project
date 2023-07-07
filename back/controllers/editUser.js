const updateUserQuery = require("../db/queries/updateUserQuery");
// const { deleteImg } = require("../helpers");

const editUser = async (req, res, next) => {
  try {
    const { id, name, age, profession } = req.body;

    // if (user.avatar) {
    //   await deleteImg(user.avatar);
    // }

		// let image = await saveImg(req.files.image, 500);

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
