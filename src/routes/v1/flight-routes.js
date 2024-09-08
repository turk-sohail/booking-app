const router = require("express").Router();
const { flightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");
const { flightService } = require("../../services");

router
  .route("/")
  .post(FlightMiddleware.validateCreateRequest, flightController.createFlight)
  .get(flightController.getAllFlights)
  .get(flightController.getFlight);

router.patch(
  "/:id/seats",
  FlightMiddleware.validateUpdateSeatsRequest,
  flightController.updateSeats
);

module.exports = router;
