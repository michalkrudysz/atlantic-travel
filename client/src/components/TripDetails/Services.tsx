import classes from "./Services.module.scss";

type Service = {
  description: string;
};

type ServicesProps = {
  services?: Service[];
};

export default function Services({ services = [] }: ServicesProps) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>
          <span>Ś</span>wiadczenia
        </h1>
      </div>
      <div className={classes.services}>
        {services.length > 0 ? (
          <ol>
            {services.map((service, index) => (
              <li key={index}>{`- ${service.description}`}</li>
            ))}
          </ol>
        ) : (
          <div className={classes["no-data"]}>
            Brak danych o świadczeniach do wyświetlenia.
          </div>
        )}
      </div>
    </div>
  );
}
