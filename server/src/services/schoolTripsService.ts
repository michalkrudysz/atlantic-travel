import { SchoolTrips } from "../models/schoolTrips";

export const getSchoolTrips = async (schoolTripsId: number) => {
  try {
    const schoolTrip = await SchoolTrips.findAll({
      where: { trip_duration: schoolTripsId },
      attributes: [
        "school_trip_id",
        "name",
        "description",
        "trip_duration",
        "services",
      ],
    });
    return schoolTrip;
  } catch (error) {
    throw error;
  }
};
