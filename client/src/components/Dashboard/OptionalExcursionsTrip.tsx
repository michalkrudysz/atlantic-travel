import classes from "./OptionalExcursionsTrip.module.scss";

type OptionalExcursionsTripProps = {
  excursions: {
    description: string;
  }[];
};

export default function OptionalExcursionsTrip({
  excursions,
}: OptionalExcursionsTripProps) {
  return (
    <div className={classes["optional-excursions"]}>
      <div className={classes["name-of-excursion"]}>
        Wycieczki fakultatywne:
      </div>
      <ul>
        {excursions.map((excursion, index) => (
          <li key={index}>{excursion.description}</li>
        ))}
      </ul>
      <div className={classes["actions"]}>
        <button>Edytuj</button>
      </div>
    </div>
  );
}
