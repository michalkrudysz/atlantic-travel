import { useParams } from "react-router-dom";
import classes from "./TripDetails.module.scss";
import Title from "../components/TripDetails/Title";

export default function TripDetails() {
  const { tripTitleDetails } = useParams();
  const decodedTitle = decodeURIComponent(tripTitleDetails);

  return (
    <>
      <div className={classes.main}>
        <Title />
      </div>
    </>
  );
}
