import { useParams } from "react-router-dom";
import classes from "./TripDetails.module.scss";
import Title from "../components/TripDetails/Title";
import TripDays from "../components/TripDetails/TripDays";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function TripDetails() {
  const { tripTitleDetails } = useParams();
  const decodedTitle = decodeURIComponent(tripTitleDetails);

  return (
    <>
      <div className={classes.main}>
        <Title />
        <TripDays />
        <Services />
        <Footer />
      </div>
    </>
  );
}
