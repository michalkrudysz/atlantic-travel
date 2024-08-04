import { useLocation } from "react-router-dom";
import classes from "./TripDetails.module.scss";
import Title from "../components/TripDetails/Title";
import TripDays from "../components/TripDetails/TripDays";
import Services from "../components/TripDetails/Services";
import OptionalExcursions from "../components/TripDetails/OptionalExcursions";
import TripContacts from "../components/TripDetails/TripContacts";
import Footer from "../components/Footer";

interface LocationState {
  tripId: number;
}

export default function TripDetails() {
  const location = useLocation();
  const state = location.state as LocationState;
  const tripId = state?.tripId;

  console.log("Trip ID:", tripId);

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
