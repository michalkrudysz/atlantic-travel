import { TripDays } from "../models/tripDays";

type CreateDayInfo = {
  trip_id: number;
  day_number: string;
  description: string;
};

export const createDay = async (info: CreateDayInfo): Promise<TripDays> => {
  try {
    const newDay = await TripDays.create({
      trip_id: info.trip_id,
      day_number: info.day_number,
      description: info.description,
    } as TripDays);

    return newDay;
  } catch (error) {
    console.error("Error while creating a new day:", error);
    throw new Error("Failed to create a new trip day");
  }
};
