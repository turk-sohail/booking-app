"use strict";

const { Enums } = require("../utils");
const { BUSINESS, ECONOMY } = Enums.SEAT_TYPE;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Seats", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			airplaneId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			row: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			col: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			type: {
				type: Sequelize.ENUM,
				allowNull: false,
				values: [BUSINESS, ECONOMY],
				default: ECONOMY,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Seats");
	},
};
