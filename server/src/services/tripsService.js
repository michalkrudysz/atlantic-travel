"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTrips = void 0;
const trips_1 = require("../models/trips");
const tripImages_1 = require("../models/tripImages");
const getAllTrips = async () => {
    try {
        const trips = await trips_1.Trips.findAll({
            attributes: ["trip_id", "title", "start_date", "end_date", "priority"],
            include: [
                {
                    model: tripImages_1.TripImages,
                    as: "image",
                    attributes: ["image_url", "description"],
                    required: false,
                },
            ],
        });
        return trips;
    }
    catch (error) {
        throw error;
    }
};
exports.getAllTrips = getAllTrips;
