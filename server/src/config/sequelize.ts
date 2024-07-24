import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { Trips } from "../models/trips";
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

sequelize.addModels([Trips]);

export default sequelize;
