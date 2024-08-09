import { Trips } from "../models/trips";
import { TripImages } from "../models/tripImages";

export const getAllTrips = async (): Promise<Trips[]> => {
  try {
    const trips = await Trips.findAll({
      attributes: ["trip_id", "title", "start_date", "end_date", "priority"],
      include: [
        {
          model: TripImages,
          as: "image",
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
