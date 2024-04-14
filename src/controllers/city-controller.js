const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils");

const { cityService } = require("../services");

async function createCity(req, res) {
	try {
		const response = await cityService.createCity({
			name: req.body.name,
		});
		SuccessResponse.data = response;

		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
		throw error;
	}
}

async function deleteCity(req, res) {
	const { id } = req.params;

	try {
		const response = await cityService.deleteCity(id);
		SuccessResponse.data = response;

		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
		throw error;
	}
}

module.exports = {
	createCity,
	deleteCity,
};
