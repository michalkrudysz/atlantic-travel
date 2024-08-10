import classes from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.container}>
        <div className={classes["contact-info"]}>
          <h2>Dane Firmy</h2>
          <p>Biuro Usługowo-Turystyczne ATLANTIC</p>
          <p>35-073 Rzeszów, Pl. Wolności 12</p>
          <p>NIP: 8131630674</p>
          <p>REGON: 690521635</p>
          <div className={classes.phones}>
            <p>Tel. 17 852 66 76</p>
            <p>Tel. 602 551 743</p>
          </div>
          <div className={classes.emails}>
            <p>E-mail: info@atlantictravel.pl</p>
          </div>
        </div>
        <div className={classes["bank-accounts"]}>
          <h2>Konta Bankowe</h2>
          <p>PKO BP I/O Rzeszów 43 1020 4391 0000 6502 0003 2011</p>
          <p>
            PKO BP I/O Rzeszów PL27 1020 4391 0000 6102 0107 7767 walutowe SWIFT
            BPKOPLPW
          </p>
        </div>
        <div className={classes["files-download"]}>
          <h2>Pliki do pobrania</h2>
          <div className={classes["file-download"]}>
            <p>Karta kwalifikacyjna</p>
            <p>Umowa agencyjna</p>
            <p>Umowa o udział w imprezie</p>
            <p>Zawarcie umowy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
