import { Request, Response } from "express";
import * as updateMainInfoService from "../services/updateMainInfoService";

export const patchMainInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedTrip = await updateMainInfoService.updateMainInfo(req.body);
    res.json(updatedTrip);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
};
