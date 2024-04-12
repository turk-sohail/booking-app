const { logger } = require("../config");

class CrudRepository {
	constructor(model) {
		this.model = model;
	}

	async create(data) {
		try {
			const response = await this.model.create(data);
			return response;
		} catch (error) {
			logger.error("something went wrong in crud repo");
			throw error;
		}
	}

	async delete(data) {
		try {
			const response = await this.model.destroy({ where: { id: data } });
			return response;
		} catch (error) {
			logger.error("something went wrong in crud repo");
			throw error;
		}
	}

	async get(data) {
		try {
			const response = await this.model.findByPk({ where: { id: data } });
			return response;
		} catch (error) {
			logger.error("something went wrong in crud repo");
			throw error;
		}
	}

	async find(data) {
		try {
			const response = await this.model.findAll(data);
			return response;
		} catch (error) {
			logger.error("something went wrong in crud repo");
			throw error;
		}
	}

	async update(id, data) {
		try {
			const response = await this.model.update(data, {
				where: { id },
			});
			return response;
		} catch (error) {
			logger.error("something went wrong in crud repo");
			throw error;
		}
	}
}

module.exports = CrudRepository;
