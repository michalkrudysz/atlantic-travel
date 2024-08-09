import classes from "./TripDays.module.scss";

type Day = {
  day_number: string;
  description: string;
};

type IncludedExcursion = {
  description: string;
};

type TripDaysProps = {
  days?: Day[];
  included?: IncludedExcursion[];
};

export default function TripDays({ days = [], included = [] }: TripDaysProps) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>
          <span>P</span>rogram wycieczki
        </h1>
      </div>
      <div className={classes.days}>
        {days.length > 0 ? (
          days.map((day, index) => (
            <div key={index} className={classes["day-container"]}>
              <div className={classes.day}>Dzień {day.day_number}</div>
              <div className={classes.description}>
                <p>{day.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className={classes["no-data"]}>
            Brak danych z dni do wyświetlenia.
          </div>
        )}
        {included.length > 0 && (
          <div className={classes["day-container"]}>
            <div className={classes.day}>
              Wycieczki wliczone w koszty wyjazdu
            </div>
            <div className={classes.included}>
              {included.map((item, index) => (
                <p key={index}>{item.description}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
