import { Request, Response } from "express";
import * as modifyServicesTripService from "../services/modifyServicesTripService";

export const modifyServicesTrip = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { trip_id, services } = req.body;
    await modifyServicesTripService.modifyServices({
      trip_id,
      services,
    });

    res.status(200).send("Services modified successfully.");
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
