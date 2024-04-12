const { StatusCodes } = require("http-status-codes");
function validateCreateRequest(req, res, next) {
	if (!req.body.modelNumber) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "something went wronng while creating airplane",
			data: {},
			error: { explanation: "model number not found in correct form" },
		});
	}
	next();
}

module.exports = {
	validateCreateRequest,
};
