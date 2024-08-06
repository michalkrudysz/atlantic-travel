import classes from "./SchoolTripDetails.module.scss";
import { useParams } from "react-router-dom";

export default function SchoolTripDetails() {
  const { schoolTrips } = useParams();

  return (
    <div className={classes["school-trip-details"]}>
      <div className={classes.title}>
        <h1>{schoolTrips!.charAt(0).toUpperCase() + schoolTrips!.slice(1)}</h1>
      </div>
      <div className={classes.container}></div>
    </div>
  );
}
