"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMainInfo = void 0;
const trips_1 = require("../models/trips");
const updateMainInfo = async (info) => {
    const trip = await trips_1.Trips.findByPk(info.trip_id);
    if (!trip) {
        throw new Error("Trip not found");
    }
    trip.start_date = info.start_date;
    trip.end_date = info.end_date;
    trip.additional_costs = info.additional_costs;
    trip.description = info.description;
    trip.title = info.title;
    trip.priority = info.priority;
    trip.price_per_person = info.price_per_person;
    await trip.save();
    return trip;
};
exports.updateMainInfo = updateMainInfo;
