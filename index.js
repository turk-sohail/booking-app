const express = require("express");
const app = express();
const apiRoutes = require("./src/routes");
const { logger } = require("./src/config");
const { errorHandler } = require("./src/utils");
const { Airport, City } = require("./src/models");

const { serverConfig } = require("./src/config");
const PORT = serverConfig.PORT;
app.use(express.json());

app.use("/api", apiRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
	logger.info(`successfully running on port ${PORT}`, "root", {});
});
