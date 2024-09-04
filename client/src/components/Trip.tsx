import { Link } from "react-router-dom";
import classes from "./Trip.module.scss";
import { Trip } from "../hooks/useTrips";
import { formatTripDates } from "../utils/formatTripDates.ts";

export default function TripComponent({ trip }: { trip: Trip }) {
  const dates = formatTripDates(trip.start_date, trip.end_date);

  return (
    <div className={classes.trip}>
      {trip.image && trip.image.image_url && (
        <div className={classes.image}>
          <img src={trip.image.image_url} alt={trip.image.description} />
          {trip.title && (
            <Link
              to={`/${encodeURIComponent(trip.title)}`}
              state={{
                tripId: trip.trip_id,
                imageUrl: trip.image.image_url,
                imageDescription: trip.image.description,
                tripTitle: trip.title,
              }}
              className={classes.overlay}
            >
              <span className={classes["overlay-text"]}>ZOBACZ WIĘCEJ</span>
            </Link>
          )}
        </div>
      )}
      {trip.title && (
        <div className={classes["trip-title"]}>
          <h2>{trip.title}</h2>
          {dates && <p>Termin: {dates}</p>}
        </div>
      )}
    </div>
  );
}
