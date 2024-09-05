"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDay = void 0;
const tripDays_1 = require("../models/tripDays");
const updateDay = async (info) => {
    const day = await tripDays_1.TripDays.findOne({
        where: {
            trip_id: info.trip_id,
            day_number: info.day_number,
        },
    });
    if (!day) {
        throw new Error("Day not found");
    }
    day.description = info.description;
    if (info.new_day_number && info.new_day_number !== day.day_number) {
        day.day_number = info.new_day_number;
    }
    await day.save();
    return day;
};
exports.updateDay = updateDay;
