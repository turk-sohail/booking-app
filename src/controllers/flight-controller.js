const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils");

const { flightService } = require("../services");

/**
 *  POST
 * /airports
 * @param {name:"igi",cityId:1,code:"DEL"} req
 * @param
 * @returns airport
 */

async function createFlight(req, res) {
	try {
		const response = await flightService.createFlight({
			flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			departureTime: req.body.departureTime,
			arrivalTime: req.body.arrivalTime,
			price: req.body.price,
			boardingGate: req.body.boardingGate,
			totalSeats: req.body.totalSeats,
		});
		SuccessResponse.data = response;

		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		console.log(error);
		if (error) {
			ErrorResponse.error = error;
			ErrorResponse.message = error.explanation;
			return res.status(error.statusCode).json(ErrorResponse);
			throw error;
		}
	}
}

/**
 * GET
 * /airports
 * @param {} req
 *
 * @returns airports
 */

// async function getAirports(req, res) {
// 	try {
// 		const response = await airportService.getAirports();
// 		SuccessResponse.data = response;

// 		return res.status(StatusCodes.OK).json(SuccessResponse);
// 	} catch (error) {
// 		ErrorResponse.error = error;
// 		return res.status(error.status).json(ErrorResponse);
// 	}
// }

/**
 */

// async function getAirport(req, res) {
// 	const { id } = req.params;

// 	try {
// 		const response = await airportService.getAirport(id);
// 		SuccessResponse.data = response;
// 		return res.status(StatusCodes.OK).json(SuccessResponse);
// 	} catch (error) {
// 		ErrorResponse.error = error;
// 		res.status(error.statusCode).json({ ErrorResponse });
// 	}
// }

// /** DELETE
//  *  /airports/:id
//  * @param {id} req
//  * @returns OK
//  */

// async function deleteAirport(req, res) {
// 	const { id } = req.params;

// 	try {
// 		const response = await airportService.deleteAirport(id);
// 		SuccessResponse.data = response;
// 		return res.status(StatusCodes.OK).json(SuccessResponse);
// 	} catch (error) {
// 		ErrorResponse.error = error;
// 		res.status(error.statusCode).json({ ErrorResponse });
// 	}
// }

// /**
//  * PATCH /airports
//  * @param {id} req
//  * @param {*} res
//  * @returns
//  */

// async function updateAirport(req, res) {
// 	const { id } = req.params;
// 	const { modelNumber, capacity } = req.body;

// 	try {
// 		const response = await airportService.updateAirport(id, {
// 			modelNumber,
// 			capacity,
// 		});
// 		console.log(response);
// 		SuccessResponse.data = response;
// 		return res.status(StatusCodes.OK).json(SuccessResponse);
// 	} catch (error) {
// 		ErrorResponse.error = error;
// 		res.status(error.statusCode).json({ ErrorResponse });
// 	}
// }

module.exports = {
	createFlight,
};
