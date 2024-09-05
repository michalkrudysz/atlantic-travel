"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactTrip = void 0;
const tripContacts_1 = require("../models/tripContacts");
const updateContactTrip = async (trip_id, contactInfo) => {
    const existingContact = await tripContacts_1.TripContacts.findOne({
        where: { trip_id },
    });
    if (existingContact) {
        await existingContact.update(contactInfo);
    }
    else {
        await tripContacts_1.TripContacts.create({
            trip_id,
            ...contactInfo,
        });
    }
};
exports.updateContactTrip = updateContactTrip;
