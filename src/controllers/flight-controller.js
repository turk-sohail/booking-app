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
    if (error) {
      ErrorResponse.error = error;
      ErrorResponse.message = error.explanation;
      return res.status(error.statusCode).json(ErrorResponse);
      throw error;
    }
  }
}

async function getAllFlights(req, res) {
  try {
    const response = await flightService.getAllFlights(req.query);
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = error.explanation;
    console.log(error);
    return res.status(error.statusCode).json(ErrorResponse);
    throw error;
  }
}

async function getFlight(req, res) {
  try {
    const response = await flightService.getFlight(req.params.id);
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = error.explanation;
    return res.status(error.statusCode).json(ErrorResponse);
    throw error;
  }
}

async function updateSeats(req, res) {
  try {
    const response = await flightService.updateSeats({
      flightId: req.params.id,
      seats: req.body.seats,
      dec: req.body.dec,
    });
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = error.explanation;
    return res.status(error.statusCode).json(ErrorResponse);
    throw error;
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats,
};
