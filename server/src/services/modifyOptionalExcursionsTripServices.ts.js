"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyOptionalExcursions = void 0;
const optionalExcursions_1 = require("../models/optionalExcursions");
const modifyOptionalExcursions = async (info) => {
    await optionalExcursions_1.OptionalExcursions.destroy({
        where: { trip_id: info.trip_id },
    });
    for (const excursion of info.excursions) {
        await optionalExcursions_1.OptionalExcursions.create({
            trip_id: info.trip_id,
            description: excursion.description,
        });
    }
};
exports.modifyOptionalExcursions = modifyOptionalExcursions;
