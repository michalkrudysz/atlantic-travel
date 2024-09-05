"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyServices = void 0;
const services_1 = require("../models/services");
const modifyServices = async (info) => {
    await services_1.Services.destroy({
        where: { trip_id: info.trip_id },
    });
    for (const service of info.services) {
        await services_1.Services.create({
            trip_id: info.trip_id,
            description: service.description,
        });
    }
};
exports.modifyServices = modifyServices;
