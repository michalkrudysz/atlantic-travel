import classes from "./Trips.module.scss";

export default function Trips() {
  return (
    <div className={classes.trips}>
      <div className={classes.trip}>
        <div className={classes.title}>Trip Title</div>
        <div className={classes["main-info"]}>
          <div className={classes.image}></div>
          <div className={classes.title}>Paryż</div>
          <div className={classes["date-range"]}>
            <div>2024-05-10</div>
            <div>2024-08-11</div>
          </div>
          <div className={classes.price}>1450.50</div>
          <div className={classes["additional-costs"]}>200.00</div>
          <div className={classes["description"]}>
            osoba + 100 zł obowiązkowa płatność na miejscu.
          </div>
        </div>
        <div className={classes["days"]}>
          <div className={classes["day"]}>
            <div className={classes["day-number"]}>1</div>
            <div className={classes["day-description"]}>
              Rozpoczęcie dnia od wizyty na najbardziej ikonicznym zabytku
              Paryża. Wjazd na górę, aby podziwiać panoramę miasta.
            </div>
          </div>
        </div>
        <div className={classes["included-excursions"]}>
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
          Rejs statkiem na Skiathos – najpiękniejsza wyspa archipelagu Sporad,
          42 euro/os
        </div>
        <div className={classes["services"]}>
          <div className={classes["service"]}>7 noclegów w Grecji</div>
        </div>
        <div className={classes["trip-contact"]}>
          <div className={classes.phone}>17 852 66 76</div>
          <div className={classes.phone}>1510 991 590</div>
          <div className={classes.email}>info@atlantictravel.pl</div>
          <div className={classes["payment-instructions"]}>
            Zaliczki prosimy wpłacać na konto BUT” ATLANTIC” PKO BP Inteligo 50
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
      <div className={classes["trip-edit"]}></div>
    </div>
  );
}
