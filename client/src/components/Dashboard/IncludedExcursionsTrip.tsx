import React from "react";
import classes from "./IncludedExcursionsTrip.module.scss";

type IncludedExcursionsTripProps = {
  excursions: Array<{ description: string }>;
};

const IncludedExcursionsTrip: React.FC<IncludedExcursionsTripProps> = ({
  excursions,
}) => {
  return (
    <div className={classes["included-excursions"]}>
      <div className={classes["name-of-excursion"]}>Wycieczki wliczone:</div>
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
};

export default IncludedExcursionsTrip;
