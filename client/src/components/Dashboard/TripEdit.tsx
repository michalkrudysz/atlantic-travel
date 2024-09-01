import React, { useState } from "react";
import classes from "./TripEdit.module.scss";
import { useTrips, Trip } from "../../hooks/useTrips";
import { formatTripDates } from "../../utils/formatTripDates";

type TripEditProps = {
  activeTrip: Trip | null;
  onEditTrip: (trip: Trip) => void;
};

const TripEdit: React.FC<TripEditProps> = ({ activeTrip, onEditTrip }) => {
  const { data: backendData } = useTrips();
  const [expandedTripEdit, setExpandedTripEdit] = useState<boolean>(false);

  const sortedTrips = backendData
    ? [...backendData].sort((a, b) => a.priority - b.priority)
    : [];

  const handleExpandTripEdit = (): void => {
    setExpandedTripEdit(!expandedTripEdit);
  };

  const handleEditTrip = (trip: Trip): void => {
    onEditTrip(trip);
  };

  return (
    <div
      className={`${classes["trip-edit"]} ${
        expandedTripEdit ? classes.expanded : ""
      }`}
    >
      <button
        className={classes["expand-button"]}
        onClick={handleExpandTripEdit}
      >
        {expandedTripEdit ? "Zwiń" : "Rozwiń"}
      </button>
      {sortedTrips?.map((trip) => (
        <div
          key={trip.trip_id}
          className={`${classes["trip-detail-edit"]} ${
            activeTrip === trip ? classes.active : ""
          }`}
        >
          <div className={classes["trip-name-edit"]}>{trip.title}</div>
          <div className={classes["trip-date-edit"]}>
            {formatTripDates(trip.start_date, trip.end_date)}
          </div>
          <div className={classes["edit-buttons"]}>
            <button
              className={classes["edit-button"]}
              onClick={() => handleEditTrip(trip)}
            >
              Edytuj
            </button>
            <button className={classes["delete-button"]}>Usuń</button>
          </div>
        </div>
      ))}
      <div className={classes["add-trip"]}>
        <button>Dodaj wyjazd</button>
      </div>
    </div>
  );
};

export default TripEdit;
