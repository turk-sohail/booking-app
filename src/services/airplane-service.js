const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
	try {
		const airplane = await airplaneRepository.create(data);
		return airplane;
	} catch (error) {
		throw new AppError(
			"Cannot create airplane",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

async function getAirplanes() {
	try {
		const airplanes = await airplaneRepository.getAll();
		return airplanes;
	} catch (error) {}
}

async function getAirplane(id) {
	try {
		const airplane = await airplaneRepository.get(id);
		return airplane;
	} catch (error) {
		if (error.StatusCode === StatusCodes.NOT_FOUND) {
			throw new AppError("Airplane does not exist", StatusCodes.NOT_FOUND);
		}
		throw new AppError("Cannot fetch data", StatusCodes.NOT_FOUND);
	}
}

async function deleteAirplane(id) {
	try {
		const airplane = await airplaneRepository.delete(id);
		return airplane;
	} catch (error) {
		if (error.StatusCode === StatusCodes.NOT_FOUND) {
			throw new AppError("Airplane does not exist", StatusCodes.NOT_FOUND);
		}
		throw new AppError("Cannot fetch data", StatusCodes.NOT_FOUND);
	}
}

async function updateAirplane(id, data) {
	try {
		const airplane = await airplaneRepository.update(id, data);
		return airplane;
	} catch (error) {
		if (error.StatusCode === StatusCodes.NOT_FOUND) {
			throw new AppError("Airplane does not exist", StatusCodes.NOT_FOUND);
		}
		throw new AppError("Cannot fetch data", StatusCodes.NOT_FOUND);
	}
}

module.exports = {
	createAirplane,
	getAirplanes,
	getAirplane,
	deleteAirplane,
	updateAirplane,
};
