import { Request, Response } from "express";
import * as schoolTripsService from "../services/schoolTripsService";

export const getSchoolTrips = async (req: Request, res: Response) => {
  try {
    const schoolTripsId = parseInt(req.params.schoolTrips, 10);
    const schoolTrips = await schoolTripsService.getSchoolTrips(schoolTripsId);

    if (schoolTrips) {
      res.json(schoolTrips);
    } else {
      res.status(404).json({ message: "Wycieczka nie znaleziona" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
