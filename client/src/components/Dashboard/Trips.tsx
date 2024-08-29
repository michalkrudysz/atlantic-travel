import { useState } from "react";
import classes from "./Trips.module.scss";
import { useTrips } from "../../hooks/useTrips";
import { formatTripDates } from "../../utils/formatTripDates";

export default function Trips() {
  const { data: backendData } = useTrips();
  const [expandedTrip, setExpandedTrip] = useState(false);
  const [expandedTripEdit, setExpandedTripEdit] = useState(false);

  const handleExpandTrip = () => {
    setExpandedTrip(!expandedTrip);
  };

  const handleExpandTripEdit = () => {
    setExpandedTripEdit(!expandedTripEdit);
  };

  return (
    <div className={classes.trips}>
      <div
        className={`${classes.trip} ${expandedTrip ? classes.expanded : ""}`}
      >
        <button className={classes["expand-button"]} onClick={handleExpandTrip}>
          {expandedTrip ? "Zwiń" : "Rozwiń"}
        </button>
        <div className={classes.image}></div>
        <div className={classes["main-info"]}>
          <div className={classes["title-info"]}>Paryż</div>
          <div className={classes["date-range"]}>
            <div className={classes["date-label"]}>Data:</div>
            <div className={classes["date-values"]}>
              <span>2024-05-10</span>
              <span>-</span>
              <span>2024-08-11</span>
            </div>
          </div>
          <div className={classes["price-info"]}>
            <div className={classes["price-label"]}>Cena podstawowa:</div>
            <div className={classes.price}>1450.50</div>
          </div>
          <div className={classes["additional-costs-info"]}>
            <div className={classes["additional-costs-label"]}>
              Cena dodatkowa:
            </div>
            <div className={classes["additional-costs"]}>200.00</div>
          </div>
          <div className={classes["description-info"]}>
            <div className={classes["description-label"]}>Dodatkowy opis:</div>
            <div className={classes["description"]}>
              obowiązkowa płatność na miejscu.
            </div>
          </div>
          <div className={classes["priority-info"]}>
            <div className={classes["priority-label"]}>
              Priorytet wyświetlania:
            </div>
            <div className={classes["priority"]}>1</div>
          </div>
          <div className={classes.actions}>
            <button>Edytuj</button>
          </div>
        </div>
        <div className={classes["days"]}>
          <div className={classes["day"]}>
            <div className={classes["day-number"]}>Dzień: 1</div>
            <div className={classes["day-description"]}>
              Rozpoczęcie dnia od wizyty na najbardziej ikonicznym zabytku
              Paryża. Wjazd na górę, aby podziwiać panoramę miasta.Rozpoczęcie
              dnia od wizyty na najbardziej ikonicznym zabytku Paryża. Wjazd na
              górę, aby podziwiać panoramę miasta.
            </div>
          </div>
        </div>
        <div className={classes["included-excursions"]}>
          <div className={classes["name-of-excursion"]}>
            Wycieczki wliczone:
          </div>
          <div className={classes["excursion"]}>
            Wycieczka do Salonik – kulinarnej stolicy Grecji z bizantyjskimi
            zabytkami wpisanymi na listę UNESCO, zwiedzanie: Biała Wieża –
            symbol miasta, pomnik Aleksandra Macedońskiego, Agia Sophia –
            kościół z VIIIw. miniatura kościoła ze Stambułu, Cerkiew Św.
            Dymitriusza z relikwiami, słynne Targowisko Kapani z regionalnymi
            wyrobami.
          </div>
        </div>
        <div className={classes["optional-excursions"]}>
          <div className={classes["name-of-excursion"]}>
            Wycieczki fakultatywne
          </div>
          <div className={classes["optional-excursion"]}>
            Rejs statkiem na Skiathos – najpiękniejsza wyspa archipelagu Sporad,
            42 euro/os
          </div>
        </div>
        <div className={classes["services"]}>
          <div className={classes["name-of-service"]}>Świadczenia</div>
          <div className={classes["service"]}>7 noclegów w Grecji</div>
        </div>
        <div className={classes["trip-contact"]}>
          <div className={classes["contact-info"]}>Dane kontaktowe</div>
          <div className={classes.phone}>17 852 66 76</div>
          <div className={classes.phone}>510 991 590</div>
          <div className={classes.email}>info@atlantictravel.pl</div>
          <div className={classes["payment-instructions"]}>
            Zaliczki prosimy wpłacać na konto BUT" ATLANTIC" PKO BP Inteligo 50
            1020 5558 1111 1275 4430 0087
          </div>
          <div className={classes["additional_description"]}>
            iejsca w autokarze są przydzielane zgodnie z kolejnością
            zgłoszeń.Wpłata zaliczki w kwocie 500 zł do dnia 15.01.2024r.
            gwarantuje niezmienność ceny.
          </div>
          <div className={classes["payment_reference"]}></div>
        </div>
      </div>
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
        {backendData?.map((trip) => (
          <div key={trip.trip_id} className={classes["trip-detail-edit"]}>
            <div className={classes["trip-name-edit"]}>{trip.title}</div>
            <div className={classes["trip-date-edit"]}>
              {formatTripDates(trip.start_date, trip.end_date)}
            </div>
            <div className={classes["edit-buttons"]}>
              <button className={classes["edit-button"]}>Edytuj</button>
              <button className={classes["delete-button"]}>Usuń</button>
            </div>
          </div>
        ))}
        <div className={classes["add-trip"]}>
          <button>Dodaj wyjazd</button>
        </div>
      </div>
    </div>
  );
}
