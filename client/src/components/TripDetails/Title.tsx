import classes from "./Title.module.scss";
import { formatTripDates } from "../../utils/formatTripDates";

interface TitleProps {
  imageUrl: string;
  imageDescription: string;
  tripTitle: string;
  startDate: string;
  endDate: string;
  price: number;
  additionalCosts: number;
  description: string;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export default function Title({
  imageUrl,
  imageDescription,
  tripTitle,
  startDate,
  endDate,
  price,
  additionalCosts,
  description,
}: TitleProps) {
  console.log(startDate);
  console.log(endDate);

  const dates = formatTripDates(startDate, endDate);

  return (
    <div className={classes.container}>
      <div className={classes["title-container"]}>
        <h1>{tripTitle}</h1>
        <h2>{`Termin: ${dates}r.`}</h2>
        <h3>
          <span>{formatPrice(price)} zł</span>
          /osoba {additionalCosts
            ? `+ ${formatPrice(additionalCosts)} zł`
            : ""}{" "}
          {description ? `${description}` : ""}
        </h3>
      </div>
      <div className={classes.image}>
        <img src={imageUrl} alt={imageDescription} />{" "}
      </div>
    </div>
  );
}
