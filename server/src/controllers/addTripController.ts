import { Request, Response } from "express";
import { Trips } from "../models/trips";
import { TripImages } from "../models/tripImages";

export const addTripController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.body;

    if (!title) {
      res.status(400).send("Title is required.");
      return;
    }

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const newTrip = await Trips.create({
      title,
      start_date: today,
      end_date: tomorrow,
      price_per_person: 0,
      additional_costs: 0,
      description: "",
      priority: 0,
    });
    const newTripImage = await TripImages.create({
      trip_id: newTrip.trip_id,
      image_url: "images/default.jpeg",
      description: "default description",
    });

    res
      .status(201)
      .send(
        `Trip with ID ${newTrip.trip_id} added successfully with default image.`
      );
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred.");
    }
  }
};
