import classes from "./Title.module.scss";

export default function Title() {
  return (
    <div className={classes.container}>
      <div className={classes["title-container"]}>
        <h1>Paryż</h1>
        <h2>Termin: 23.06. - 4.07.2024</h2>
        <h3>
          <span>3895 zł</span>/osoba (wiek 15 -18 lat)
        </h3>
      </div>
      <div className={classes.image}>
        <img src="https://via.placeholder.com/150" alt="Paryż" />
      </div>
    </div>
  );
}
