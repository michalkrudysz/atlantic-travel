import { Trips } from "../models/trips";
import { TripDays } from "../models/tripDays";
import { IncludedExcursions } from "../models/includedExcursions";
import { OptionalExcursions } from "../models/optionalExcursions";
import { Services } from "../models/services";
import { TripContacts } from "../models/tripContacts";

export const getTripDetails = async (tripId: number) => {
  try {
    const tripDetails = await Trips.findOne({
      where: { trip_id: tripId },
      attributes: [
        "start_date",
        "end_date",
        "price_per_person",
        "additional_costs",
        "description",
        "trip_id",
      ],
      include: [
        {
          model: TripDays,
          attributes: ["day_number", "description"],
        },
        {
          model: IncludedExcursions,
          attributes: ["description"],
        },
        {
          model: OptionalExcursions,
          attributes: ["description"],
        },
        {
          model: Services,
          attributes: ["description"],
        },
        {
          model: TripContacts,
          attributes: [
            "phone1",
            "phone2",
            "phone3",
            "email1",
            "email2",
            "payment_instructions",
            "additional_description",
            "payment_reference",
          ],
        },
      ],
    });
    return tripDetails;
  } catch (error) {
    throw error;
  }
};
