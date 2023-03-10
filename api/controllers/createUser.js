const createUserQuery = require("../db/queries/createUserQuery");

const createUser = async (req, res, next) => {
	try {
		const { name, age, profession } = req.body;

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
