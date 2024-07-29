import { useParams } from "react-router-dom";
import trips from "../components/testData"; // Upewnij się, że ten import odnosi się do odpowiedniego pliku

export default function TripDetails() {
  const { tripTitleDetails } = useParams();
  const decodedTitle = decodeURIComponent(tripTitleDetails);

  return (
    <div>
      <h1>{tripTitleDetails}</h1>
      <h1>{`Zdekodowany: ${decodedTitle}`}</h1>
    </div>
  );
}
