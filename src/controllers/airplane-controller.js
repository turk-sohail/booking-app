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

async function getAirplanes(req, res) {
	try {
		const response = await airplaneService.getAirplanes();
		SuccessResponse.data = response;

		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.status).json(ErrorResponse);
	}
}

async function getAirplane(req, res) {
	const { id } = req.params;

	try {
		const response = await airplaneService.getAirplane(id);
		SuccessResponse.data = response;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		res.status(error.statusCode).json({ ErrorResponse });
	}
}

async function deleteAirplane(req, res) {
	const { id } = req.params;

	try {
		const response = await airplaneService.deleteAirplane(id);
		SuccessResponse.data = response;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		res.status(error.statusCode).json({ ErrorResponse });
	}
}

async function updateAirplane(req, res) {
	const { id } = req.params;
	const { modelNumber, capacity } = req.body;

	try {
		const response = await airplaneService.updateAirplane(id, {
			modelNumber,
			capacity,
		});
		console.log(response);
		SuccessResponse.data = response;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		res.status(error.statusCode).json({ ErrorResponse });
	}
}

module.exports = {
	createAirplane,
	getAirplanes,
	getAirplane,
	deleteAirplane,
	updateAirplane,
};
