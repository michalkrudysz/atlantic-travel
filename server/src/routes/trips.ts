import express from "express";
import * as tripsController from "../controllers/tripsController";
import * as tripDetailsController from "../controllers/tripDetailsController";

const tripsRouter = express.Router();

tripsRouter.get("/", tripsController.getAllTrips);
tripsRouter.get("/:tripId", tripDetailsController.getTripDetails);

export default tripsRouter;
