const { StatusCodes } = require("http-status-codes");

const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error.js");

const cityRepository = new CityRepository();

async function createCity(data) {
	try {
		const city = await cityRepository.create(data);
		return city;
	} catch (error) {
		throw new AppError("Cannot create city", StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

async function deleteCity(data) {
	try {
		const city = await cityRepository.delete(data);
		return city;
	} catch (error) {
		throw new AppError("Cannot create city", StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

module.exports = {
	createCity,
	deleteCity,
};
