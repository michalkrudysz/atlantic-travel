import classes from "./SchoolTripDetails.module.scss";
import { useParams } from "react-router-dom";
import { useSchoolTripsDetails } from "../hooks/useSchoolTripsDetails";
import Footer from "../components/Footer";

export default function SchoolTripDetails() {
  const { schoolTrips } = useParams<{ schoolTrips?: string }>();
  let tripId;
  switch (schoolTrips) {
    case "jednodniowe":
      tripId = 1;
      break;
    case "dwudniowe":
      tripId = 2;
      break;
    case "trzydniowe":
      tripId = 3;
      break;
    default:
      tripId = 0;
      break;
  }

  const { data: schoolTripsDetails, isLoading } = useSchoolTripsDetails(tripId);

  if (isLoading) {
    return null;
  }

  if (!schoolTripsDetails) {
    return <div>Brak danych</div>;
  }

  console.log(schoolTripsDetails);
  return (
    <div className={classes["school-trip-details"]}>
      <div className={classes.title}>
        <h1>
          {schoolTrips
            ? schoolTrips.charAt(0).toUpperCase() + schoolTrips.slice(1)
            : "Trip"}
        </h1>
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
