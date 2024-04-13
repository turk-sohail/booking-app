const { airplanecontroller } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");

const router = require("express").Router();

router.post(
	"/",
	AirplaneMiddleware.validateCreateRequest,
	airplanecontroller.createAirplane
);

router.get("/", airplanecontroller.getAirplanes);

router.get("/:id", airplanecontroller.getAirplane);
router.delete("/:id", airplanecontroller.deleteAirplane);

module.exports = router;
