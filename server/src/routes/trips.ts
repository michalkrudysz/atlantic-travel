import express from "express";
import * as tripsController from "../controllers/tripsController";

const router = express.Router();

router.get("/", tripsController.getAllTrips);

export default router;
