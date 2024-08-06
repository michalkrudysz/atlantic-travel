import classes from "./SchoolTrips.module.scss";

export default function SchoolTrips() {
  return (
    <div className={classes["school-trips"]}>
      <h1>Wycieczki szkolne</h1>
      <div className={classes["trip-days"]}>
        <div className={classes["trip-day"]}>Jednodniowe</div>
        <div className={classes["trip-day"]}>Dwudniowe</div>
        <div className={classes["trip-day"]}>Trzydniowe</div>
      </div>
    </div>
  );
}
