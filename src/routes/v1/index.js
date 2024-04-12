const router = require("express").Router();
const { infoController } = require("../../controllers");
const homeRoutes = require("./home");
const airplaneRoutes = require("./airplane-routes");

router.get("/info", infoController.info);

router.use("/home", homeRoutes);
router.use("/airplanes", airplaneRoutes);

module.exports = router;
