import { useParams } from "react-router-dom";
import trips from "../components/testData";

export default function TripDetails() {
  const { tripTitleDetails } = useParams();
  const decodedTitle = decodeURIComponent(tripTitleDetails);

  const trip = trips.find((trip) => trip.title === decodedTitle);

  if (!trip) {
    return <div>Nie znaleziono wycieczki</div>;
  }

  return (
    <div>
      <h1>{trip.title}</h1>
      <p>Data rozpoczęcia: {trip.start_date}</p>
      <p>Data zakończenia: {trip.end_date}</p>
      <p>Opis: {trip.description}</p>
    </div>
  );
}
