import classes from "./Trips.module.scss";
import Trip from "./Trip";
import data from "../components/testData";

export default function Trips() {
  return (
    <div className={classes.trips}>
      <h1>Nasza aktualna oferta</h1>
      <div className={classes.trip}>
        {data.map((trip) => (
          <Trip key={trip.trip_id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
