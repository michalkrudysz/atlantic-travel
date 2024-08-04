import classes from "./TripContacts.module.scss";

export default function TripContacts() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Zgłoszenia prosimy kierować na:</h1>
      </div>
      <div className={classes.contacts}>
        <h2>Telefon:</h2>
        <p>17 852 66 76</p>
        <p>510 991 590</p>
        <p>602 551 743</p>
        <h2>Email:</h2>
        <p>info@atlantictravel.pl</p>
        <p>info@atlantictravel.pl</p>
      </div>
      <div className={classes["additional-description"]}>
        <p>
          Miejsca w autokarze są przydzielane zgodnie z kolejnością zgłoszeń.
          Warunkiem potwierdzenia udziału w imprezie jest wpłata wymaganej
          zaliczki (wpisowe). Wpłata zaliczki w kwocie 500 zł do dnia
          15.01.2024r. gwarantuje niezmienność ceny.
        </p>
      </div>
      <div className={classes["payment-instructions"]}>
        Zaliczki prosimy wpłacać na konto BUT” ATLANTIC” PKO BP Inteligo 50 1020
        5558 1111 1275 4430 0087
      </div>
      <div className={classes["payment-reference"]}>
        <p>Z dopiskiem wycieczka do Grecji w terminie 15 - 24.06.2024r.</p>
      </div>
    </div>
  );
}
