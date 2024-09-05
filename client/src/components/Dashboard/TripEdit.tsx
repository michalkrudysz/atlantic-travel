// TripEdit.tsx
import { useState } from "react";
import classes from "./TripEdit.module.scss";
import { useTrips, Trip } from "../../hooks/useTrips";
import { formatTripDates } from "../../utils/formatTripDates";
import { useDeleteTrip } from "../../hooks/useDeleteTrip";
import { useAddTrip } from "../../hooks/useAddTrip";

type TripEditProps = {
  activeTrip: Trip | null;
  onEditTrip: (trip: Trip) => void;
};

const TripEdit: React.FC<TripEditProps> = ({ activeTrip, onEditTrip }) => {
  const { data: backendData } = useTrips();
  const deleteTrip = useDeleteTrip();
  const addTrip = useAddTrip();
  const [expandedTripEdit, setExpandedTripEdit] = useState<boolean>(false);
  const [addingTrip, setAddingTrip] = useState<boolean>(false);
  const [newTripName, setNewTripName] = useState<string>("");

  const sortedTrips = backendData
    ? [...backendData].sort((a, b) => a.priority - b.priority)
    : [];

  const handleExpandTripEdit = (): void => {
    setExpandedTripEdit(!expandedTripEdit);
  };

  const handleEditTrip = (trip: Trip): void => {
    onEditTrip(trip);
  };

  const handleDeleteTrip = (tripId: number): void => {
    deleteTrip({ trip_id: tripId });
  };

  const handleAddTrip = (): void => {
    if (addingTrip) {
      addTrip(
        { title: newTripName },
        {
          onSuccess: () => {
            setAddingTrip(false);
            setNewTripName("");
          },
        }
      );
    } else {
      setAddingTrip(true);
    }
  };

  const handleCancelAddTrip = (): void => {
    setAddingTrip(false);
    setNewTripName("");
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
            <button
              className={classes["delete-button"]}
              onClick={() => handleDeleteTrip(trip.trip_id)}
            >
              Usuń
            </button>
          </div>
        </div>
      ))}
      <div className={classes["add-trip"]}>
        {addingTrip ? (
          <div className={classes["add-trip-form"]}>
            <label htmlFor="newTripName">Podaj nazwę wyjazdu:</label>
            <input
              id="newTripName"
              value={newTripName}
              onChange={(e) => setNewTripName(e.target.value)}
            />
            <div className={classes["add-trip-buttons"]}>
              <button
                className={classes["save-button"]}
                onClick={handleAddTrip}
              >
                Zapisz
              </button>
              <button
                className={classes["cancel-button"]}
                onClick={handleCancelAddTrip}
              >
                Anuluj
              </button>
            </div>
          </div>
        ) : (
          <button
            className={classes["add-trip-button"]}
            onClick={handleAddTrip}
          >
            Dodaj wyjazd
          </button>
        )}
      </div>
    </div>
  );
};

export default TripEdit;
