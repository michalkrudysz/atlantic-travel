import { Request, Response } from "express";
import * as tripsService from "../services/tripsService";
import { Trips } from "../models/trips";

function updateImageUrl(trips: Trips[], req: Request): void {
  trips.forEach((trip) => {
    if (trip.image) {
      trip.image.image_url = `${req.protocol}://${req.get("host")}/${
        trip.image.image_url
      }`;
    }
  });
}

export const getAllTrips = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let trips = await tripsService.getAllTrips();
    updateImageUrl(trips, req);
    res.json(trips);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
