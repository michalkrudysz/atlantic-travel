import { useEffect } from "react";
import classes from "./Trips.module.scss";
import Trip from "./Trip";
import { useTrips } from "../hooks/useTrips";

export default function Trips() {
  const { data: backendData, isLoading, error } = useTrips();

  useEffect(() => {
    if (backendData) {
      console.log("Dane otrzymane z backendu:", backendData);
    }
  }, [backendData]);

  useEffect(() => {
    if (isLoading) {
      console.log("Ładowanie danych z backendu...");
    }
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      console.error("Błąd podczas pobierania danych z backendu:", error);
    }
  }, [error]);

  return (
    <div className={classes.trips}>
      <h1>Nasza aktualna oferta</h1>
      <div className={classes.trip}>
        {backendData?.map((trip) => (
          <Trip key={trip.trip_id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
