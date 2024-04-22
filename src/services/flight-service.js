const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const flightRepository = new FlightRepository();
const { compareTime } = require("../utils/compare-time");
const { ErrorResponse } = require("../utils");

async function createFlight(data) {
	const { departureTime, arrivalTime } = data;
	const isGreater = compareTime(departureTime, arrivalTime);
	console.log(isGreater);
	if (isGreater) {
		throw new AppError(
			"Departure time cannot be greater the arrival Time",
			StatusCodes.BAD_REQUEST
		);
	}
	try {
		const flight = await flightRepository.create(data);
		return flight;
	} catch (error) {
		throw new AppError(
			"Cannot create flight",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

module.exports = {
	createFlight,
};
