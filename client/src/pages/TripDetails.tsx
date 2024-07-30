import { useParams } from "react-router-dom";
import classes from "./TripDetails.module.scss";
import Title from "../components/TripDetails/Title";
import TripDays from "../components/TripDetails/TripDays";

export default function TripDetails() {
  const { tripTitleDetails } = useParams();
  const decodedTitle = decodeURIComponent(tripTitleDetails);

  return (
    <>
      <div className={classes.main}>
        <Title />
        <TripDays />
      </div>
    </>
  );
}
