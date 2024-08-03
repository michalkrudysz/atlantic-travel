import classes from "./Services.module.scss";

export default function Services() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>
          <span>Ś</span>wiadczenia
        </h1>
      </div>
      <div className={classes.services}>
        <ol>
          <li>- Przejazd autokarem klasy LUX</li>
          <li>- Opłaty drogowe i autostrady</li>
          <li>- Wyżywienie wg programu: śniadania i obiadokolacje</li>
          <li>- Przejazd autokarem klasy LUX</li>
          <li>- Opłaty drogowe i autostrady</li>
          <li>- Wyżywienie wg programu: śniadania i obiadokolacje</li>
        </ol>
      </div>
    </div>
  );
}
