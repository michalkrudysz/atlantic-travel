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
  imageUrl: string;
  imageDescription: string;
  tripTitle: string;
  price: number;
  additionalCosts: number;
  description: string;
  days: { day_number: string; description: string }[];
  included: { description: string }[];
}

export default function TripDetails() {
  const location = useLocation();
  const state = location.state as LocationState;
  const tripId = state?.tripId;
  const imageUrl = state?.imageUrl;
  const imageDescription = state?.imageDescription;
  const tripTitle = state?.tripTitle;

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
        <Title
          imageUrl={imageUrl}
          imageDescription={imageDescription}
          tripTitle={tripTitle}
          startDate={tripDetails!.start_date}
          endDate={tripDetails!.end_date}
          price={tripDetails!.price_per_person}
          additionalCosts={tripDetails!.additional_costs}
          description={tripDetails!.description}
        />
        <TripDays
          days={tripDetails!.tripDays}
          included={tripDetails!.includedExcursions}
        />
        <Services />
        <OptionalExcursions />
        <TripContacts />
        <Footer />
      </div>
    </>
  );
}
