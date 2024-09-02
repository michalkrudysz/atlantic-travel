import { Request, Response } from "express";
import * as updateDayService from "../services/updateDayService";

export const patchDay = async (req: Request, res: Response): Promise<void> => {
  try {
    const { trip_id, day_number, description, new_day_number } = req.body;
    const updatedDay = await updateDayService.updateDay({
      trip_id,
      day_number,
      description,
      new_day_number,
    });

    res.json(updatedDay);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
