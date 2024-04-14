const router = require("express").Router();
const { cityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

router.post(
	"/",
	CityMiddleware.validateCreateRequest,
	cityController.createCity
);

router.delete("/", cityController.deleteCity);

module.exports = router;
