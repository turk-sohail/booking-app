"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert(
			"Airplanes",
			[
				{
					modelNumber: "B-152",
					capacity: 250,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					modelNumber: "F-380",
					capacity: 108,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					modelNumber: "R-56f",
					capacity: 300,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
