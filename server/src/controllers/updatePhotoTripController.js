"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhotoTripController = void 0;
const updatePhotoTripService_1 = require("../services/updatePhotoTripService");
const updatePhotoTripController = async (req, res) => {
    if (!req.file) {
        res.status(400).send("No file uploaded.");
        return;
    }
    const { trip_id, description } = req.body;
    if (!trip_id || !description) {
        res.status(400).send("Missing required fields: trip_id or description.");
        return;
    }
    try {
        const imageUrl = `images/${req.file.filename}`;
        const updatedPhoto = await (0, updatePhotoTripService_1.updatePhotoTrip)({
            trip_id: parseInt(trip_id, 10),
            image_url: imageUrl,
            description,
        });
        res.json(updatedPhoto);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send(error.message);
        }
        else {
            res.status(500).send("An unexpected error occurred");
        }
    }
};
exports.updatePhotoTripController = updatePhotoTripController;
