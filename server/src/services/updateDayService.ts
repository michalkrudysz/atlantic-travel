import { TripDays } from "../models/tripDays";

type UpdateDayInfo = {
  trip_id: number;
  day_number: string;
  description: string;
  new_day_number?: string;
};

export const updateDay = async (info: UpdateDayInfo): Promise<TripDays> => {
  const day = await TripDays.findOne({
    where: {
      trip_id: info.trip_id,
      day_number: info.day_number,
    },
  });

  if (!day) {
    throw new Error("Day not found");
  }

  day.description = info.description;
  if (info.new_day_number && info.new_day_number !== day.day_number) {
    day.day_number = info.new_day_number;
  }

  await day.save();
  return day;
};
