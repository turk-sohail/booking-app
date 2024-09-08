const CrudRepository = require("./crud-repository");
const { Flight, Airport, Airplane, City, Sequelize, db } = require("../models");
const sequelize = require("sequelize");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filters, sort) {
    const response = await Flight.findAll({
      where: filters,
      order: sort,
      include: [
        { model: Airplane, required: true },
        {
          model: Airport,
          as: "departure-airport",
          required: true,
          on: {
            col1: sequelize.where(
              sequelize.col("Flight.departureAirportId"),
              "=",
              sequelize.col("departure-airport.code")
            ),
          },
          include: {
            model: City,
          },
        },
        {
          model: Airport,
          required: true,
          as: "arrival-airport",
          on: {
            col1: sequelize.where(
              sequelize.col("Flight.arrivalAirportId"),
              "=",
              sequelize.col("arrival-airport.code")
            ),
          },
          include: {
            model: City,
          },
        },
      ],
    });
    return response;
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(
      `SELECT * from Flights WHERE Flights.id = ${flightId} FOR UPDATE;`
    );
    const flight = await Flight.findByPk(flightId);
    if (dec) {
      await flight.decrement("totalSeats", { by: seats });
    } else {
      await flight.increment("totalSeats", { by: seats });
    }
    // await flight.save();
    return flight;
  }
}

module.exports = FlightRepository;
