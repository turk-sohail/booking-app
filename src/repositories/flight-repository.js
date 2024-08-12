const CrudRepository = require("./crud-repository");
const { Flight, Airport, Airplane, City } = require("../models");
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
}

module.exports = FlightRepository;
