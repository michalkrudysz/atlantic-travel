"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchoolTrips = void 0;
const schoolTrips_1 = require("../models/schoolTrips");
const getSchoolTrips = async (schoolTripsId) => {
    try {
        const schoolTrip = await schoolTrips_1.SchoolTrips.findAll({
            where: { trip_duration: schoolTripsId },
            attributes: [
                "school_trip_id",
                "name",
                "description",
                "trip_duration",
                "services",
            ],
        });
        return schoolTrip;
    }
    catch (error) {
        throw error;
    }
};
exports.getSchoolTrips = getSchoolTrips;
