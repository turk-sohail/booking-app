const { logger } = require("../../config");
const { StatusCodes } = require("http-status-codes");

const errorHandler = (error, request, response, next) => {
	logger.error(error.message);

	if (error.name == "SequelizeValidationError" || error.name == "Sequel") {
		return response
			.status(StatusCodes.BAD_REQUEST)
			.send({ error: "please try again" });
	} else if (error.name === "ValidationError") {
		return response
			.status(StatusCodes.BAD_REQUEST)
			.json({ error: error.message });
	} else if (error.name == "AppError") {
		return response
			.status(StatusCodes.BAD_REQUEST)
			.json({ error: error.message });
	}

	next(error);
};

module.exports = errorHandler;
