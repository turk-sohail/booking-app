const { StatusCodes } = require("http-status-codes");

/**
 *
 * {name,cityId,code}
 */
function validateCreateRequest(req, res, next) {
	const { name, cityId, code } = req.body;
	if (!name) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "something went wronng while creating airport",
			data: {},
			error: { explanation: "airport name is required" },
		});
	}
	if (!cityId) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "something went wronng while creating airport",
			data: {},
			error: { explanation: "city id not found in request" },
		});
	}
	if (!code) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "something went wronng while creating airplane",
			data: {},
			error: { explanation: "Airport code not found  in correct form" },
		});
	}
	next();
}

module.exports = {
	validateCreateRequest,
};
