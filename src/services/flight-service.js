const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const flightRepository = new FlightRepository();
const { compareTime } = require("../utils/compare-time");
const { ErrorResponse } = require("../utils");
const { Op } = require("sequelize");
const { data } = require("../utils/common/success-response");

async function createFlight(data) {
  const { departureTime, arrivalTime } = data;
  const isGreater = compareTime(departureTime, arrivalTime);
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

async function getAllFlights(query, filters) {
  let customFilter = {};
  let sortFilter = [];
  const endingTripTime = "23:59:00";
  //ISB-KAR
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split(">");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    if (customFilter.arrivalAirportId === customFilter.departureAirportId) {
      throw new Error("Ids must be differnt");
    }
  }

  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice === undefined ? 20000 : maxPrice],
    };
  }
  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gt]: query.travellers,
    };
  }
  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
    };
  }

  if (query.sort) {
    const params = query.sort.split(",");
    console.log(query);
    const sortFilters = params.map((param) => param.split("_"));
    sortFilter = sortFilters;
  }

  try {
    const flights = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    );
    return flights;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot fetch flights data",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getFlight(id) {
  try {
    const flight = await flightRepository.get(id);
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
  getAllFlights,
  getFlight,
};
