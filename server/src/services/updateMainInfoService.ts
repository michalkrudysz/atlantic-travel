import { Trips } from "../models/trips";

type UpdateTripInfo = {
  trip_id: number;
  start_date: Date;
  end_date: Date;
  additional_costs: number;
  description: string;
  priority: number;
  title: string;
  price_per_person: number;
};

export const updateMainInfo = async (info: UpdateTripInfo): Promise<Trips> => {
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
  trip.price_per_person = info.price_per_person;

  await trip.save();
  return trip;
};
