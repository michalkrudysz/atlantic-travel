import classes from "./Trip.module.scss";
import tolo from "../assets/images/zimowisko.png";

export default function Trip() {
  return (
    <div className={classes.trip}>
      <div className={classes.image}>
        <img src={tolo} alt="business card" />
      </div>
      <div className={classes.overlay}>
        <span className={classes["overlay-text"]}>ZOBACZ WIĘCEJ</span>
      </div>
      <div className={classes["trip-title"]}>
        <h2>Tolo na Peloponezie</h2>
        <p>Termin: 23.06. – 4.07.2024</p>
      </div>
    </div>
  );
}
