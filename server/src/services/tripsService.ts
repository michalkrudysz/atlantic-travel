import { Trips } from "../models/trips";

export const getAllTrips = async () => {
  try {
    const trips = await Trips.findAll({
      attributes: ["trip_id", "title", "start_date", "end_date"],
    });
    return trips;
  } catch (error) {
    throw error;
  }
};
