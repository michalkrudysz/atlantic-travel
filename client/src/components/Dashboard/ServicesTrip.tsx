import classes from "./ServicesTrip.module.scss";

type ServicesTripProps = {
  services: {
    description: string;
  }[];
};

export default function ServicesTrip({ services }: ServicesTripProps) {
  return (
    <div className={classes["services"]}>
      <div className={classes["name-of-service"]}>Świadczenia:</div>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service.description}</li>
        ))}
      </ul>
      <div className={classes["actions"]}>
        <button>Edytuj</button>
      </div>
    </div>
  );
}
