"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDay = void 0;
const tripDays_1 = require("../models/tripDays");
const createDay = async (info) => {
    try {
        const newDay = await tripDays_1.TripDays.create({
            trip_id: info.trip_id,
            day_number: info.day_number,
            description: info.description,
        });
        return newDay;
    }
    catch (error) {
        console.error("Error while creating a new day:", error);
        throw new Error("Failed to create a new trip day");
    }
};
exports.createDay = createDay;
