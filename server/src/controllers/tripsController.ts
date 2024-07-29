import { Request, Response } from "express";
import * as tripsService from "../services/tripsService";

export const getAllTrips = async (req: Request, res: Response) => {
  try {
    const trips = await tripsService.getAllTrips();
    res.json(trips);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
