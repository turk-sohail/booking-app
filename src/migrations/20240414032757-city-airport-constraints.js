"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		queryInterface.addConstraint("Airports", {
			fields: ["cityId"],
			type: "foreign key",
			name: "city-airport-foregn-key-constr",
			references: {
				//Required field
				table: "Cities",
				field: "id",
			},
			onDelete: "cascade",
			onUpdate: "cascade",
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */

		await queryInterface.removeConstraint(
			"Airports",
			"city-airport-foregn-key-constr"
		);
	},
};
