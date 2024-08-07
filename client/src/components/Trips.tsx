import classes from "./Trips.module.scss";
import Trip from "./Trip";
import { useTrips } from "../hooks/useTrips";

export default function Trips() {
  const { data: backendData } = useTrips();

  const sortedTrips = backendData
    ? [...backendData].sort((a, b) => a.priority - b.priority)
    : [];

  return (
    <div className={classes.trips}>
      <h1>Nasza aktualna oferta</h1>
      <div className={classes.trip}>
        {sortedTrips.map((trip) => (
          <Trip key={trip.trip_id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
