import { Link } from "react-router-dom";
import classes from "./Trip.module.scss";
import tolo from "../assets/images/zimowisko.png";

export default function Trip({ trip }) {
  return (
    <div className={classes.trip}>
      <div className={classes.image}>
        <img src={tolo} alt="business card" />
      </div>
      <Link
        to={`/${encodeURIComponent(trip.title)}`}
        className={classes.overlay}
      >
        <span className={classes["overlay-text"]}>ZOBACZ WIĘCEJ</span>
      </Link>
      <div className={classes["trip-title"]}>
        <h2>{trip.title}</h2>
        <p>
          Termin: {trip.start_date} – {trip.end_date}
        </p>
      </div>
    </div>
  );
}
