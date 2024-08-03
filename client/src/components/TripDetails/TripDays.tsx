import classes from "./TripDays.module.scss";

export default function TripDays() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>
          <span>P</span>rogram wycieczki
        </h1>
      </div>
      <div className={classes.days}>
        <div className={classes["day-container"]}>
          <div className={classes.day}>Dzień 1</div>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
        <div className={classes["day-container"]}>
          <div className={classes.day}>Dzień 1</div>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
        <div className={classes["day-container"]}>
          <div className={classes.day}>Dzień 1</div>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
        <div className={classes["day-container"]}>
          <div className={classes.day}>Dzień 1</div>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
        <div className={classes["day-container"]}>
          <div className={classes.day}>Wycieczki wliczone w koszty wyjazdu</div>
          <div className={classes.included}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
      </div>
    </div>
  );
}
