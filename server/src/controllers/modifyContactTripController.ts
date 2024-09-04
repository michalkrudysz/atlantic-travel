import { Request, Response } from "express";
import * as modifyContactTripService from "../services/modifyContactTripService";

export const modifyContactTrip = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { trip_id, ...contactData } = req.body;
    await modifyContactTripService.updateContactTrip(trip_id, contactData);

    res.status(200).send("Contact information updated successfully.");
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
