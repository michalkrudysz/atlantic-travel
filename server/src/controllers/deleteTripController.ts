import { Request, Response } from "express";
import { Trips } from "../models/trips";
import { TripImages } from "../models/tripImages";
import { IncludedExcursions } from "../models/includedExcursions";
import { OptionalExcursions } from "../models/optionalExcursions";
import { Services } from "../models/services";

export const deleteTripController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { trip_id } = req.body;

  try {
    const trip = await Trips.findByPk(trip_id);
    if (!trip) {
      res.status(404).send("Trip not found");
      return;
    }
    await Services.destroy({
      where: { trip_id },
    });
    await OptionalExcursions.destroy({
      where: { trip_id },
    });
    await IncludedExcursions.destroy({
      where: { trip_id },
    });
    await TripImages.destroy({
      where: { trip_id },
    });
    await trip.destroy();
    res.status(200).send("Trip deleted successfully");
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
