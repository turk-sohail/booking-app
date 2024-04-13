const { StatusCodes } = require("http-status-codes");
const { logger } = require("../config");
const AppError = require("../utils/errors/app-error");

class CrudRepository {
	constructor(model) {
		this.model = model;
	}

	async create(data) {
		const response = await this.model.create(data);
		return response;
	}

	async delete(data) {
		const response = await this.model.destroy({ where: { id: data } });
		return response;
	}

	async get(data) {
		console.log(data);
		const response = await this.model.findByPk(data);
		if (!response) {
			throw new AppError("Resource not found", StatusCodes.NOT_FOUND);
		}
		return response;
	}

	async getAll() {
		const response = await this.model.findAll();
		return response;
	}

	async update(id, data) {
		const response = await this.model.update(data, {
			where: { id },
		});
		return response;
	}
}

module.exports = CrudRepository;
