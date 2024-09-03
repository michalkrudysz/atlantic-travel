import { useState, useEffect } from "react";
import classes from "./Trips.module.scss";
import { useTrips, Trip } from "../../hooks/useTrips";
import { useTripDetails } from "../../hooks/useTripDetails";
import TripEdit from "./TripEdit";
import MainInfo from "./MainInfo";
import DaysTrip from "./DaysTrip";
import IncludedExcursionsTrip from "./IncludedExcursionsTrip";
import OptionalExcursionsTrip from "./OptionalExcursionsTrip";
import ServicesTrip from "./ServicesTrip";
import ContactTrip from "./ContactTrip";

export default function Trips() {
  const { data: backendData } = useTrips();
  const [expandedTrip, setExpandedTrip] = useState(false);
  const sortedTrips = backendData
    ? [...backendData].sort((a, b) => a.priority - b.priority)
    : [];
  const [activeTrip, setActiveTrip] = useState<Trip | null>(null);
  const { data: tripDetails } = useTripDetails(activeTrip?.trip_id || 0);

  useEffect(() => {
    if (!activeTrip && sortedTrips.length > 0) {
      setActiveTrip(sortedTrips[0]);
    }
  }, [activeTrip, sortedTrips]);

  const handleExpandTrip = () => {
    setExpandedTrip(!expandedTrip);
  };

  const handleEditTrip = (trip: Trip) => {
    setActiveTrip(trip);
  };

  return (
    <div className={classes.trips}>
      <div
        className={`${classes.trip} ${expandedTrip ? classes.expanded : ""}`}
      >
        <button className={classes["expand-button"]} onClick={handleExpandTrip}>
          {expandedTrip ? "Zwiń" : "Rozwiń"}
        </button>
        {activeTrip && (
          <>
            <div className={classes.image}>
              <img
                src={activeTrip.image.image_url}
                alt={activeTrip.image.description}
              />
              <div className={classes["actions"]}>
                <button>Zmień zdjęcie</button>
              </div>
            </div>
            <MainInfo activeTrip={activeTrip} tripDetails={tripDetails} />
            {tripDetails && (
              <>
                <DaysTrip
                  tripDays={tripDetails.tripDays}
                  tripId={activeTrip.trip_id}
                />
                <IncludedExcursionsTrip
                  excursions={tripDetails.includedExcursions}
                  tripId={activeTrip.trip_id}
                />
                <OptionalExcursionsTrip
                  excursions={tripDetails.optionalExcursions}
                />
                <ServicesTrip
                  services={tripDetails.services}
                  tripId={activeTrip.trip_id}
                />
                <ContactTrip tripContacts={tripDetails.tripContacts} />
              </>
            )}
          </>
        )}
      </div>
      <TripEdit activeTrip={activeTrip} onEditTrip={handleEditTrip} />
    </div>
  );
}
