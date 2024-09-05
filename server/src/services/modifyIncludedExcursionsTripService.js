"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyExcursions = void 0;
const includedExcursions_1 = require("../models/includedExcursions");
const modifyExcursions = async (info) => {
    await includedExcursions_1.IncludedExcursions.destroy({
        where: { trip_id: info.trip_id },
    });
    for (const excursion of info.excursions) {
        await includedExcursions_1.IncludedExcursions.create({
            trip_id: info.trip_id,
            description: excursion.description,
        });
    }
};
exports.modifyExcursions = modifyExcursions;
