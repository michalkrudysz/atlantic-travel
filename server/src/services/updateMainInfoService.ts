import { Trips } from "../models/trips";

interface UpdateTripInfo {
  trip_id: number;
  start_date: Date;
  end_date: Date;
  additional_costs: number;
  description: string;
  priority: number;
  title: string;
}

export const updateMainInfo = async (info: UpdateTripInfo): Promise<Trips> => {
  try {
    const trip = await Trips.findByPk(info.trip_id);
    if (!trip) {
      throw new Error("Trip not found");
    }

    trip.start_date = info.start_date;
    trip.end_date = info.end_date;
    trip.additional_costs = info.additional_costs;
    trip.description = info.description;
    trip.title = info.title;
    trip.priority = info.priority;

    await trip.save();
    return trip;
  } catch (error) {
    throw error;
  }
};
