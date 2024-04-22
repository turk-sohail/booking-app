const { StatusCodes } = require("http-status-codes");

/**
 *
 * {name,cityId,code}
 * flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			
            departureTime:req.body,departureTime,
            arrivalTime: req.body.arrivalTime,
			price: req.body.price,
			boardingGate: req.body.boardingGate,
			totalSeats: req.body.totalSeats,
 */
function validateCreateRequest(req, res, next) {
	const {
		flightNumber,
		airplaneId,
		departureAirportId,
		arrivalAirportId,
		departureTime,
		arrivalTime,
		price,
		totalSeats,
	} = req.body;
	if (!flightNumber) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "flightNumber is required",
			data: {},
			error: { explanation: "flight number is required" },
		});
	}
	if (!airplaneId) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "airplaneId is required",
			data: {},
			error: { explanation: "provide airplaneId" },
		});
	}
	if (!departureAirportId) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "departureAirportId is not provided",
			data: {},
			error: { explanation: "departureAirportId not found  in correct form" },
		});
	}

	if (!arrivalAirportId) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "arrivalAirportId is not provided",
			data: {},
			error: { explanation: "arrivalAirportId not found  in correct form" },
		});
	}

	if (!departureTime) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "arrivalAirportId is not provided",
			data: {},
			error: { explanation: "arrivalAirportId not found  in correct form" },
		});
	}

	if (!arrivalTime) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "arrivalTime is not provided",
			data: {},
			error: { explanation: "arrivalTime not found  in correct form" },
		});
	}

	if (!price) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "price is not provided",
			data: {},
			error: { explanation: "price not found  in correct form" },
		});
	}

	if (!totalSeats) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: false,
			message: "totalSeats is required",
			data: {},
			error: { explanation: "totalSeats is required" },
		});
	}
	next();
}

module.exports = {
	validateCreateRequest,
};
