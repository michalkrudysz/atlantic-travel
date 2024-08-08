import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Trips } from "../models/trips";
import { TripImages } from "../models/tripImages";
import { TripDays } from "../models/tripDays";
import { IncludedExcursions } from "../models/includedExcursions";
import { OptionalExcursions } from "../models/optionalExcursions";
import { Services } from "../models/services";
import { TripContacts } from "../models/tripContacts";
import { SchoolTrips } from "../models/schoolTrips";

import dotenv from "dotenv";

dotenv.config();

const sequelizeOptions: SequelizeOptions = {
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

const sequelize = new Sequelize(
  process.env.DB_NAME ?? "",
  process.env.DB_USER ?? "",
  process.env.DB_PASSWORD ?? "",
  sequelizeOptions
);

sequelize.addModels([
  Trips,
  TripImages,
  TripDays,
  IncludedExcursions,
  OptionalExcursions,
  Services,
  TripContacts,
  SchoolTrips,
]);

export default sequelize;
