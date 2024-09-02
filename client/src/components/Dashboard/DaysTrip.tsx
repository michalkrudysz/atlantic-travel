import classes from "./DaysTrip.module.scss";

type DaysTripProps = {
  tripDays: any[];
  tripId: number;
};

export default function DaysTrip({ tripDays }: DaysTripProps) {
  return (
    <div className={classes["days"]}>
      {tripDays.map((day, index) => (
        <div key={index} className={classes["day"]}>
          <div className={classes["day-number"]}>Dzień: {day.day_number}</div>
          <div className={classes["day-description"]}>{day.description}</div>
          <div className={classes["actions"]}>
            <button>Edytuj</button>
          </div>
        </div>
      ))}
      <div className={classes["add-day"]}>Dodaj dzień</div>
    </div>
  );
}
