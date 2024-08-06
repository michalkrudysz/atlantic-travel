import classes from "./SchoolTrips.module.scss";
import { Link } from "react-router-dom";

export default function SchoolTrips() {
  const tripDurations = ["jednodniowe", "dwudniowe", "trzydniowe"];

  return (
    <div className={classes["school-trips"]}>
      <h1>Wycieczki szkolne</h1>
      <div className={classes["trip-days"]}>
        {tripDurations.map((duration) => (
          <Link
            key={duration}
            to={`/szkolne/${duration}`}
            className={classes["trip-day"]}
          >
            {duration.charAt(0).toUpperCase() + duration.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
