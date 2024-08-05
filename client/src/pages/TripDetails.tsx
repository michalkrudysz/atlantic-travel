import { useLocation } from "react-router-dom";
import classes from "./TripDetails.module.scss";
import Title from "../components/TripDetails/Title";
import TripDays from "../components/TripDetails/TripDays";
import Services from "../components/TripDetails/Services";
import OptionalExcursions from "../components/TripDetails/OptionalExcursions";
import TripContacts from "../components/TripDetails/TripContacts";
import Footer from "../components/Footer";
import { useTripDetails } from "../hooks/useTripDetails";

interface LocationState {
  tripId: number;
}

export default function TripDetails() {
  const location = useLocation();
  const state = location.state as LocationState;
  const tripId = state?.tripId;

  console.log("Trip ID from location state:", tripId);

  const { data: tripDetails, isLoading, error } = useTripDetails(tripId!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("Trip Details:", tripDetails);

  return (
    <>
      <div className={classes.main}>
        <Title />
        <TripDays />
        <Services />
        <OptionalExcursions />
        <TripContacts />
        <Footer />
      </div>
    </>
  );
}
