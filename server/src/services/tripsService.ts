import { Trips } from "../models/trips";
import { TripImages } from "../models/tripImages";

export const getAllTrips = async () => {
  try {
    const trips = await Trips.findAll({
      attributes: ["trip_id", "title", "start_date", "end_date", "priority"],
      include: [
        {
          model: TripImages,
          attributes: ["image_url", "description"],
          required: false,
        },
      ],
    });
    return trips;
  } catch (error) {
    throw error;
  }
};
