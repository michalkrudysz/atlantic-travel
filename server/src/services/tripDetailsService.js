"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTripDetails = void 0;
const trips_1 = require("../models/trips");
const tripDays_1 = require("../models/tripDays");
const includedExcursions_1 = require("../models/includedExcursions");
const optionalExcursions_1 = require("../models/optionalExcursions");
const services_1 = require("../models/services");
const tripContacts_1 = require("../models/tripContacts");
const getTripDetails = async (tripId) => {
    try {
        const tripDetails = await trips_1.Trips.findOne({
            where: { trip_id: tripId },
            attributes: [
                "start_date",
                "end_date",
                "price_per_person",
                "additional_costs",
                "description",
                "trip_id",
            ],
            include: [
                {
                    model: tripDays_1.TripDays,
                    attributes: ["day_number", "description"],
                },
                {
                    model: includedExcursions_1.IncludedExcursions,
                    attributes: ["description"],
                },
                {
                    model: optionalExcursions_1.OptionalExcursions,
                    attributes: ["description"],
                },
                {
                    model: services_1.Services,
                    attributes: ["description"],
                },
                {
                    model: tripContacts_1.TripContacts,
                    attributes: [
                        "phone1",
                        "phone2",
                        "phone3",
                        "email1",
                        "email2",
                        "payment_instructions",
                        "additional_description",
                        "payment_reference",
                    ],
                },
            ],
        });
        return tripDetails;
    }
    catch (error) {
        throw error;
    }
};
exports.getTripDetails = getTripDetails;
