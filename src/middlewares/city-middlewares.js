const { StatusCodes } = require("http-status-codes");
function validateCreateRequest(req, res, next) {
	if (!req.body.name) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "something went wronng while creating city",
			data: {},
			error: { explanation: "name not found in the request" },
		});
	}
	next();
}

module.exports = {
	validateCreateRequest,
};
