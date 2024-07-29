import { Link } from "react-router-dom";
import classes from "./Trip.module.scss";
import { Trip } from "../hooks/useTrips";

export default function TripComponent({ trip }: { trip: Trip }) {
  return (
    <div className={classes.trip}>
      <div className={classes.image}>
        <img src={trip.image.image_url} alt={trip.image.description} />
        <Link
          to={`/${encodeURIComponent(trip.title)}`}
          className={classes.overlay}
        >
          <span className={classes["overlay-text"]}>ZOBACZ WIĘCEJ</span>
        </Link>
      </div>
      <div className={classes["trip-title"]}>
        <h2>{trip.title}</h2>
        <p>
          Termin: {trip.start_date} – {trip.end_date}
        </p>
      </div>
    </div>
  );
}
