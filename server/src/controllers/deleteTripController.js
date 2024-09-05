"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTripController = void 0;
const trips_1 = require("../models/trips");
const tripImages_1 = require("../models/tripImages");
const includedExcursions_1 = require("../models/includedExcursions");
const optionalExcursions_1 = require("../models/optionalExcursions");
const services_1 = require("../models/services");
const deleteTripController = async (req, res) => {
    const { trip_id } = req.body;
    try {
        const trip = await trips_1.Trips.findByPk(trip_id);
        if (!trip) {
            res.status(404).send("Trip not found");
            return;
        }
        await services_1.Services.destroy({
            where: { trip_id },
        });
        await optionalExcursions_1.OptionalExcursions.destroy({
            where: { trip_id },
        });
        await includedExcursions_1.IncludedExcursions.destroy({
            where: { trip_id },
        });
        await tripImages_1.TripImages.destroy({
            where: { trip_id },
        });
        await trip.destroy();
        res.status(200).send("Trip deleted successfully");
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        }
        else {
            res.status(500).send("An unexpected error occurred");
        }
    }
};
exports.deleteTripController = deleteTripController;
