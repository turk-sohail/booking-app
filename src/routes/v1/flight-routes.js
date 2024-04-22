const router = require("express").Router();
const { flightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");

router
	.route("/")
	.post(FlightMiddleware.validateCreateRequest, flightController.createFlight);

module.exports = router;
