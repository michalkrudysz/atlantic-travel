import { Request, Response } from "express";
import * as modifyIncludedExcursionsTripService from "../services/modifyIncludedExcursionsTripService";

export const modifyIncludedExcursionsTrip = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { trip_id, excursions } = req.body;
    await modifyIncludedExcursionsTripService.modifyExcursions({
      trip_id,
      excursions,
    });

    res.status(200).send("Excursions modified successfully.");
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
