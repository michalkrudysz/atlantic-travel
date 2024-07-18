import classes from "./Trips.module.scss";
import Trip from "./Trip.tsx";

export default function Trips() {
  return (
    <div className={classes.trips}>
      <h1>Nasza aktualna oferta</h1>
      <div className={classes.trip}>
        <Trip />
        <Trip />
        <Trip />
        <Trip />
        <Trip />
        <Trip />
      </div>
    </div>
  );
}
