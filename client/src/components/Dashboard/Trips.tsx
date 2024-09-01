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

  console.log(tripDetails);

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
                <DaysTrip tripDays={tripDetails.tripDays} />
                <IncludedExcursionsTrip
                  excursions={tripDetails.includedExcursions}
                />
                <OptionalExcursionsTrip
                  excursions={tripDetails.optionalExcursions}
                />
                <ServicesTrip services={tripDetails.services} />
                <div className={classes["trip-contact"]}>
                  <div className={classes["contact-info"]}>
                    Dane kontaktowe:
                  </div>
                  <div className={classes["contact-details"]}>
                    {tripDetails.tripContacts.map((contact, index) => (
                      <div key={index}>
                        {contact.phone1 && (
                          <div
                            className={classes.phone}
                          >{`Telefon: ${contact.phone1}`}</div>
                        )}
                        {contact.phone2 && (
                          <div
                            className={classes.phone}
                          >{`Telefon: ${contact.phone2}`}</div>
                        )}
                        {contact.phone3 && (
                          <div
                            className={classes.phone}
                          >{`Telefon: ${contact.phone3}`}</div>
                        )}
                        {contact.email1 && (
                          <div
                            className={classes.email}
                          >{`Email: ${contact.email1}`}</div>
                        )}
                        {contact.email2 && (
                          <div
                            className={classes.email}
                          >{`Email: ${contact.email2}`}</div>
                        )}
                        {contact.payment_instructions && (
                          <div className={classes["payment-instructions"]}>
                            {`Instrukcje płatności: ${contact.payment_instructions}`}
                          </div>
                        )}
                        {contact.additional_description && (
                          <div className={classes["additional_description"]}>
                            {`Dodatkowe informacje: ${contact.additional_description}`}
                          </div>
                        )}
                        {contact.payment_reference && (
                          <div className={classes["payment_reference"]}>
                            {`Referencje płatności: ${contact.payment_reference}`}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className={classes["actions"]}>
                    <button>Edytuj</button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <TripEdit activeTrip={activeTrip} onEditTrip={handleEditTrip} />
    </div>
  );
}
