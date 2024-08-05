import express from "express";
import * as tripsController from "../controllers/tripsController";
import * as tripDetailsController from "../controllers/tripDetailsController";

const router = express.Router();

router.get("/", tripsController.getAllTrips);
router.get("/:tripId", tripDetailsController.getTripDetails);

export default router;
