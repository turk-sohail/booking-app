const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils");

const { airplaneService } = require("../services");

async function createAirplane(req, res) {
	try {
		const response = await airplaneService.createAirplane({
			modelNumber: req.body.modelNumber,
			capacity: req.body.capacity,
		});
		SuccessResponse.data = response;

		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
		throw error;
	}
}

module.exports = {
	createAirplane,
};
