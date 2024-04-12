const { aiplanecontroller } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");

const router = require("express").Router();

router.post(
	"/",
	AirplaneMiddleware.validateCreateRequest,
	aiplanecontroller.createAirplane
);

module.exports = router;
