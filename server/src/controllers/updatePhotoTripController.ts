import { Request, Response } from "express";
import { updatePhotoTrip } from "../services/updatePhotoTripService";

export const updatePhotoTripController = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }

  const { trip_id, description } = req.body;

  if (!trip_id || !description) {
    res.status(400).send("Missing required fields: trip_id or description.");
    return;
  }

  try {
    const imageUrl = `images/${req.file.filename}`;
    const updatedPhoto = await updatePhotoTrip({
      trip_id: parseInt(trip_id, 10),
      image_url: imageUrl,
      description,
    });

    res.json(updatedPhoto);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
