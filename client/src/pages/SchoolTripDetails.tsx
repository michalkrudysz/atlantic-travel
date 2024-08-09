import { useParams } from "react-router-dom";
import { useSchoolTripsDetails } from "../hooks/useSchoolTripsDetails";
import Footer from "../components/Footer";
import classes from "./SchoolTripDetails.module.scss";

const tripIdMap: Record<string, number> = {
  jednodniowe: 1,
  dwudniowe: 2,
  trzydniowe: 3,
};

export default function SchoolTripDetails() {
  const { schoolTrips = "" } = useParams<{ schoolTrips?: string }>();
  const tripId = tripIdMap[schoolTrips] || 0;

  const { data: schoolTripsDetails, isLoading } = useSchoolTripsDetails(tripId);

  if (isLoading) {
    return null;
  }

  if (!schoolTripsDetails) {
    return <div>Brak danych</div>;
  }

  const capitalizedSchoolTrips =
    schoolTrips.charAt(0).toUpperCase() + schoolTrips.slice(1);

  return (
    <div className={classes["school-trip-details"]}>
      <div className={classes.title}>
        <h1>{capitalizedSchoolTrips || "Trip"}</h1>
      </div>
      <div className={classes.container}>
        {schoolTripsDetails.map((schoolTrip) => (
          <div
            key={schoolTrip.school_trip_id}
            className={classes["trip-details"]}
          >
            <h1>{schoolTrip.name}</h1>
            <h2>Program zwiedzania</h2>
            <p>{schoolTrip.description}</p>
            <p>
              <span>Świadczenia: </span>
              {schoolTrip.services}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
