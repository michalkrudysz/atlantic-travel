import express from "express";
import * as schoolTripsController from "../controllers/schoolTripsController";

const schoolTripsRouter = express.Router();

schoolTripsRouter.get("/:schoolTrips", schoolTripsController.getSchoolTrips);

export default schoolTripsRouter;
