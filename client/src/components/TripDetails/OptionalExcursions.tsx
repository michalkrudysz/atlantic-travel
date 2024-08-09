import classes from "./OptionalExcursions.module.scss";

type Excursion = {
  description: string;
};

type OptionalExcursionsProps = {
  optionalExcursions?: Excursion[];
};

export default function OptionalExcursions({
  optionalExcursions = [],
}: OptionalExcursionsProps) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>
          <span>W</span>ycieczki fakultatywne
        </h1>
      </div>
      <div className={classes.days}>
        {optionalExcursions.length > 0 ? (
          optionalExcursions.map((excursion, index) => (
            <div key={index} className={classes["day-container"]}>
              <div className={classes.description}>
                <p>{excursion.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className={classes["no-data"]}>
            Brak danych o wycieczkach fakultatywnych do wyświetlenia.
          </div>
        )}
      </div>
    </div>
  );
}
