const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airportRepository = new AirportRepository();

async function createAirport(data) {
	console.log(data);
	try {
		const airport = await airportRepository.create(data);
		return airport;
	} catch (error) {
		console.log(error);
		throw new AppError(
			"Cannot create airport",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function getAirports() {
	try {
		const airports = await airportRepository.getAll();
		return airports;
	} catch (error) {}
}

async function getAirport(id) {
	try {
		const airport = await airportRepository.get(id);
		return airport;
	} catch (error) {
		if (error.StatusCode === StatusCodes.NOT_FOUND) {
			throw new AppError("Airport does not exist", StatusCodes.NOT_FOUND);
		}
		throw new AppError("Cannot fetch data", StatusCodes.NOT_FOUND);
	}
}

async function deleteAirport(id) {
	try {
		const airport = await airportRepository.delete(id);
		return airport;
	} catch (error) {
		if (error.StatusCode === StatusCodes.NOT_FOUND) {
			throw new AppError("Airport does not exist", StatusCodes.NOT_FOUND);
		}
		throw new AppError("Cannot fetch data", StatusCodes.NOT_FOUND);
	}
}

async function updateAirport(id, data) {
	try {
		const airport = await airportRepository.update(id, data);
		return airport;
	} catch (error) {
		if (error.StatusCode === StatusCodes.NOT_FOUND) {
			throw new AppError("Airport does not exist", StatusCodes.NOT_FOUND);
		}
		throw new AppError("Cannot fetch data", StatusCodes.NOT_FOUND);
	}
}

module.exports = {
	createAirport,
	getAirport,
	getAirports,
	deleteAirport,
	updateAirport,
};
