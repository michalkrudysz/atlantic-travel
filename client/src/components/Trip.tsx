import classes from "./Trip.module.scss";
import tolo from "../assets/images/zimowisko.png";

export default function Trip() {
  return (
    <div className={classes.trip}>
      <img src={tolo} alt="business card" />
      <div className={classes.overlay}>
        <span className={classes["overlay-text"]}>ZOBACZ WIĘCEJ</span>
      </div>
      <div className={classes["trip-title"]}>
        <h2>Tolo na Peloponezie</h2>
      </div>
    </div>
  );
}
