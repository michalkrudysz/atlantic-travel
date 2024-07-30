// Importowanie niezbędnych modeli
import { Trips } from "../models/trips";
import { TripImages } from "../models/tripImages";

// Definicja funkcji do pobierania wszystkich wycieczek wraz z ich obrazami
export const getAllTrips = async () => {
  try {
    // Pobieranie wszystkich wycieczek z bazy danych
    const trips = await Trips.findAll({
      attributes: ["trip_id", "title", "start_date", "end_date", "priority"], // Ograniczenie atrybutów do niezbędnych
      include: [
        {
          model: TripImages,
          attributes: ["image_url", "description"], // Pobieranie tylko URL i opisu obrazu
          required: false, // LEFT OUTER JOIN
        },
      ],
    });
    return trips;
  } catch (error) {
    // W przypadku wystąpienia błędu, przechwycenie go i rzucenie dalej
    throw error;
  }
};
