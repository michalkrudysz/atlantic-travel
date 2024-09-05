import { useState, useEffect, useRef } from "react";
import classes from "./Trips.module.scss";
import { useTrips, Trip } from "../../hooks/useTrips";
import { useTripDetails } from "../../hooks/useTripDetails";
import { useUpdatePhotoTrip } from "../../hooks/useUpdatePhotoTrip";
import TripEdit from "./TripEdit";
import MainInfo from "./MainInfo";
import DaysTrip from "./DaysTrip";
import IncludedExcursionsTrip from "./IncludedExcursionsTrip";
import OptionalExcursionsTrip from "./OptionalExcursionsTrip";
import ServicesTrip from "./ServicesTrip";
import ContactTrip from "./ContactTrip";
import Logout from "./Logout";

export default function Trips() {
  const { data: backendData } = useTrips();
  const [expandedTrip, setExpandedTrip] = useState(false);
  const sortedTrips = backendData
    ? [...backendData].sort((a, b) => a.priority - b.priority)
    : [];
  const [activeTrip, setActiveTrip] = useState<Trip | null>(null);
  const { data: tripDetails } = useTripDetails(activeTrip?.trip_id || 0);
  const updatePhoto = useUpdatePhotoTrip();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newPhoto, setNewPhoto] = useState<string | null>(null);
  const [photoDescription, setPhotoDescription] = useState<string>("");
  const [editingPhoto, setEditingPhoto] = useState(false);

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

  const handlePhotoChange = () => {
    if (
      activeTrip &&
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const file = fileInputRef.current.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setNewPhoto(e.target.result);
        } else {
          console.error("Failed to load the image");
          setNewPhoto(null);
        }
      };
      reader.onerror = (e) => {
        console.error("Error reading file:", e);
        setNewPhoto(null);
      };
      reader.readAsDataURL(file);
      setEditingPhoto(true);
    }
  };

  const handleSavePhoto = () => {
    if (
      activeTrip &&
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const file = fileInputRef.current.files[0];
      updatePhoto({
        trip_id: activeTrip.trip_id,
        file: file,
        description: photoDescription,
      });
      setEditingPhoto(false);
    }
  };

  const handleCancelPhoto = () => {
    setEditingPhoto(false);
    setNewPhoto(null);
  };

  return (
    <div className={classes.trips}>
      <Logout />
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
                src={newPhoto || activeTrip.image.image_url}
                alt={activeTrip.image.description}
              />
              <div className={classes["actions"]}>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handlePhotoChange}
                />
                <button
                  onClick={() =>
                    fileInputRef.current && fileInputRef.current.click()
                  }
                >
                  Zmień zdjęcie
                </button>
                {editingPhoto && (
                  <>
                    <input
                      type="text"
                      placeholder="Opis zdjęcia"
                      value={photoDescription}
                      onChange={(e) => setPhotoDescription(e.target.value)}
                    />
                    <button onClick={handleSavePhoto}>Zapisz</button>
                    <button
                      className={classes.cancle}
                      onClick={handleCancelPhoto}
                    >
                      Anuluj
                    </button>
                  </>
                )}
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
                  tripId={activeTrip.trip_id}
                />
                <ServicesTrip
                  services={tripDetails.services}
                  tripId={activeTrip.trip_id}
                />
                <ContactTrip
                  tripContacts={tripDetails.tripContacts}
                  tripId={activeTrip.trip_id}
                />
              </>
            )}
          </>
        )}
      </div>
      <TripEdit activeTrip={activeTrip} onEditTrip={handleEditTrip} />
    </div>
  );
}
