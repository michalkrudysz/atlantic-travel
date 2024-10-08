import { useLocation } from "react-router-dom";
import classes from "./TripDetails.module.scss";
import Title from "../components/TripDetails/Title";
import TripDays from "../components/TripDetails/TripDays";
import Services from "../components/TripDetails/Services";
import OptionalExcursions from "../components/TripDetails/OptionalExcursions";
import TripContacts from "../components/TripDetails/TripContacts";
import Footer from "../components/Footer";
import { useTripDetails } from "../hooks/useTripDetails";

type LocationState = {
  tripId: number;
  imageUrl: string;
  imageDescription: string;
  tripTitle: string;
};

export default function TripDetails() {
  const location = useLocation();
  const state = location.state as LocationState;
  const { tripId, imageUrl, imageDescription, tripTitle } = state || {};

  const { data: tripDetails, isLoading } = useTripDetails(tripId);

  if (isLoading || !tripDetails) {
    return null;
  }

  const {
    start_date,
    end_date,
    price_per_person,
    additional_costs,
    description,
    tripDays,
    includedExcursions,
    services,
    optionalExcursions,
    tripContacts,
  } = tripDetails;

  return (
    <div className={classes.main}>
      {imageUrl &&
        imageDescription &&
        tripTitle &&
        start_date &&
        end_date &&
        price_per_person &&
        additional_costs &&
        description && (
          <Title
            imageUrl={imageUrl}
            imageDescription={imageDescription}
            tripTitle={tripTitle}
            startDate={start_date}
            endDate={end_date}
            price={price_per_person}
            additionalCosts={additional_costs}
            description={description}
          />
        )}
      {tripDays && includedExcursions && tripDays.length > 0 && (
        <TripDays days={tripDays} included={includedExcursions} />
      )}
      {services && services.length > 0 && <Services services={services} />}
      {optionalExcursions && optionalExcursions.length > 0 && (
        <OptionalExcursions optionalExcursions={optionalExcursions} />
      )}
      {tripContacts && Object.keys(tripContacts).length > 0 && (
        <TripContacts tripContacts={tripContacts} />
      )}
      <Footer />
    </div>
  );
}
