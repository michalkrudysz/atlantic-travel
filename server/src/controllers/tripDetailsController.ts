import { Request, Response } from "express";
import * as tripDetailsService from "../services/tripDetailsService";

export const getTripDetails = async (req: Request, res: Response) => {
  try {
    const tripId = parseInt(req.params.tripId, 10);
    const tripDetails = await tripDetailsService.getTripDetails(tripId);

    if (tripDetails) {
      res.json(tripDetails);
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
