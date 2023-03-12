const createUserQuery = require("../db/queries/createUserQuery");
// const { saveImg } = require("../helpers");

const createUser = async (req, res, next) => {
	try {
		const { name, age, profession } = req.body;

		// const avatar = await saveImg(req.files?.avatar, 500);

		await createUserQuery(name, age, profession);

		res.send({
			code: 200,
			status: "ok",
			message: "Usuario creado",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = createUser;
