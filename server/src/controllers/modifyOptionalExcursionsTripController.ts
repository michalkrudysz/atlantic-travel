import { Request, Response } from "express";
import * as modifyOptionalExcursionsTripService from "../services/modifyOptionalExcursionsTripServices";

export const modifyOptionalExcursionsTrip = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { trip_id, excursions } = req.body;
    await modifyOptionalExcursionsTripService.modifyOptionalExcursions({
      trip_id,
      excursions,
    });

    res.status(200).send("Optional excursions modified successfully.");
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
