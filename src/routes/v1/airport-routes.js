const router = require("express").Router();
const { airportController } = require("../../controllers");
const { AirportMiddleware } = require("../../middlewares");

router
	.route("/")
	.get(airportController.getAirports)
	.post(
		AirportMiddleware.validateCreateRequest,
		airportController.createAirport
	);
router
	.route("/:id")
	.get(airportController.getAirport)
	.patch(airportController.updateAirport)
	.delete(airportController.deleteAirport);

module.exports = router;
