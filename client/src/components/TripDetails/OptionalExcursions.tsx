import classes from "./OptionalExcursions.module.scss";

export default function OptionalExcursions() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>
          <span>W</span>ycieczki fakultatywne
        </h1>
      </div>
      <div className={classes.days}>
        <div className={classes["day-container"]}>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
        <div className={classes["day-container"]}>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
        <div className={classes["day-container"]}>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
        <div className={classes["day-container"]}>
          <div className={classes.description}>
            <p>Przylot do Paryża, zakwaterowanie, obiadokolacja</p>
          </div>
        </div>
      </div>
    </div>
  );
}
