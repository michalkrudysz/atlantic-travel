import { Request, Response } from "express";
import * as createDayService from "../services/createDayService";

export const createDay = async (req: Request, res: Response): Promise<void> => {
  try {
    const { trip_id, day_number, description } = req.body;
    const newDay = await createDayService.createDay({
      trip_id,
      day_number,
      description,
    });

    res.status(201).json(newDay);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
