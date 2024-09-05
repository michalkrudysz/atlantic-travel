"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const trips_1 = require("../models/trips");
const tripImages_1 = require("../models/tripImages");
const tripDays_1 = require("../models/tripDays");
const includedExcursions_1 = require("../models/includedExcursions");
const optionalExcursions_1 = require("../models/optionalExcursions");
const services_1 = require("../models/services");
const tripContacts_1 = require("../models/tripContacts");
const schoolTrips_1 = require("../models/schoolTrips");
const testimonials_1 = require("../models/testimonials");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelizeOptions = {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
const sequelize = new sequelize_typescript_1.Sequelize(process.env.DB_NAME ?? "", process.env.DB_USER ?? "", process.env.DB_PASSWORD ?? "", sequelizeOptions);
sequelize.addModels([
    trips_1.Trips,
    tripImages_1.TripImages,
    tripDays_1.TripDays,
    includedExcursions_1.IncludedExcursions,
    optionalExcursions_1.OptionalExcursions,
    services_1.Services,
    tripContacts_1.TripContacts,
    schoolTrips_1.SchoolTrips,
    testimonials_1.Testimonials,
]);
exports.default = sequelize;
