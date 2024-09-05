"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhotoTrip = void 0;
const tripImages_1 = require("../models/tripImages");
const updatePhotoTrip = async (info) => {
    const photo = await tripImages_1.TripImages.findOne({
        where: {
            trip_id: info.trip_id,
        },
    });
    if (!photo) {
        throw new Error("Photo not found for the given trip ID.");
    }
    photo.image_url = info.image_url;
    photo.description = info.description;
    await photo.save();
    return photo;
};
exports.updatePhotoTrip = updatePhotoTrip;
